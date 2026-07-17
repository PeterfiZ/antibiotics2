/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Microbe, MicrobeResistance } from '../types';
import { Bug, Info, HelpCircle, Check, AlertCircle, X, Columns, Grid } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage, TransText } from '../lib/LanguageContext';

export default function MicrobiologyView() {
  const { t, tg, language, microbesData, antibioticsData } = useLanguage();
  const [selectedMicrobe, setSelectedMicrobe] = useState<Microbe | null>(null);
  const [viewMode, setViewMode] = useState<'cards' | 'matrix'>('matrix');
  const [hoveredCell, setHoveredCell] = useState<{ microbeId: string; abId: string } | null>(null);
  const [clickedCell, setClickedCell] = useState<{ microbe: Microbe; res: MicrobeResistance } | null>(null);

  // List of antibiotics to show in the matrix
  const matrixAntibiotics = useMemo(() => {
    return [
      { id: 'penicillin_g', shortName: 'PEN' },
      { id: 'amoxicillin', shortName: 'AMX' },
      { id: 'amoxicillin_clavulanate', shortName: 'AMC' },
      { id: 'cefazolin', shortName: 'CFZ' },
      { id: 'cefuroxime', shortName: 'CXM' },
      { id: 'ceftriaxone', shortName: 'CRO' },
      { id: 'ceftazidime', shortName: 'CAZ' },
      { id: 'cefepime', shortName: 'FEP' },
      { id: 'ceftolozane_tazobactam', shortName: 'C/T' },
      { id: 'meropenem', shortName: 'MEM' },
      { id: 'gentamicin', shortName: 'GEN' },
      { id: 'vancomycin', shortName: 'VAN' },
      { id: 'clindamycin', shortName: 'CLI' },
      { id: 'metronidazole', shortName: 'MTZ' },
      { id: 'ciprofloxacin', shortName: 'CIP' },
      { id: 'azithromycin', shortName: 'AZM' },
      { id: 'doxycycline', shortName: 'DOX' },
      { id: 'linezolid', shortName: 'LNZ' }
    ];
  }, []);

  // Helper to find susceptibility for a microbe and an antibiotic
  const getCellData = (microbe: Microbe, abId: string): MicrobeResistance | null => {
    const res = microbe.resistances.find(r => r.antibioticId === abId);
    if (res) return res;

    // Check if antibiotic is in our global list to make an intelligent guess if missing from local resistances
    const globalAb = antibioticsData.find(a => a.id === abId);
    if (!globalAb) return null;

    // Default mappings for untreated/not explicitly defined cells based on microbiological rules
    let susceptibility: 'S' | 'I' | 'R' = 'R';
    let mechanismNotes = language === 'hu' 
      ? 'Természetes rezisztencia vagy hatástalanság' 
      : language === 'de'
      ? 'Natürliche Resistenz oder Unwirksamkeit'
      : 'Intrinsic resistance or lack of efficacy';

    // Gram-negatives vs Glycopeptides (Vancomycin) - always Resistant
    if (microbe.type === 'gram-negative' && abId === 'vancomycin') {
      susceptibility = 'R';
      mechanismNotes = language === 'hu'
        ? 'A vancomycin nagy mérete miatt képtelen áthatolni a Gram-negatívak külső membránján.'
        : language === 'de'
        ? 'Aufgrund seiner Größe kann Vancomycin die äußere Membran gramnegativer Erreger nicht durchdringen.'
        : 'Due to its large size, vancomycin cannot penetrate the outer membrane of Gram-negative bacteria.';
    }
    // Anaerobes vs Metronidazole - generally sensitive
    else if (microbe.type === 'anaerobe' && abId === 'metronidazole') {
      susceptibility = 'S';
      mechanismNotes = language === 'hu'
        ? 'Az anaerob PFOR redukálja a metronidazolt reaktív gyökökké.'
        : language === 'de'
        ? 'Das anaerobe PFOR reduziert Metronidazol zu reaktiven Radikalen.'
        : 'The anaerobic PFOR enzyme reduces metronidazole to reactive free radicals.';
    }
    // Aerobes vs Metronidazole - always Resistant
    else if (microbe.type !== 'anaerobe' && abId === 'metronidazole') {
      susceptibility = 'R';
      mechanismNotes = language === 'hu'
        ? 'Oxigéndús környezetben a metronidazol nitro-csoportja nem tud redukálódni gyökökké.'
        : language === 'de'
        ? 'In sauerstoffreicher Umgebung kann die Nitrogruppe von Metronidazol nicht zu Radikalen reduziert werden.'
        : 'In oxygenated environments, the nitro group of metronidazole cannot be reduced to active radicals.';
    }
    // Atypicals vs all beta-lactams (PEN, AMX, AMC, CFZ, CXM, CRO, MEM, ceftazidime, cefepime, ceftolozane_tazobactam) - always Resistant
    else if (microbe.type === 'atypical' && [
      'penicillin_g', 'amoxicillin', 'amoxicillin_clavulanate', 
      'cefazolin', 'cefuroxime', 'ceftriaxone', 'meropenem',
      'ceftazidime', 'cefepime', 'ceftolozane_tazobactam'
    ].includes(abId)) {
      susceptibility = 'R';
      mechanismNotes = language === 'hu' 
        ? 'Az atipusos baktériumok intracellulárisak vagy nincs peptidoglikán sejtfaluk (pl. Mycoplasma).'
        : language === 'de'
        ? 'Atypische Bakterien sind intrazellulär oder haben keine Peptidoglykan-Zellwand (z. B. Mycoplasma).'
        : 'Atypical bacteria are intracellular or lack a peptidoglycan cell wall (e.g., Mycoplasma).';
    }
    // --- DYNAMIC SUSCEPTIBILITY FOR NEW ANTIBIOTICS ---
    else if (abId === 'linezolid') {
      if (microbe.type === 'gram-positive') {
        susceptibility = 'S';
        mechanismNotes = language === 'hu'
          ? 'Kiváló Gram-pozitív ellenes oxazolidinon szer, MRSA és VRE ellen is hatékony.'
          : language === 'de'
          ? 'Hervorragendes oxazolidinon-Präparat gegen grampositive Erreger, auch gegen MRSA und VRE wirksam.'
          : 'Excellent oxazolidinone agent against Gram-positive pathogens, highly effective against MRSA and VRE.';
      } else {
        susceptibility = 'R';
        mechanismNotes = language === 'hu'
          ? 'A linezolid kizárólag Gram-pozitív kórokozók ellen hatékony, a Gram-negatívak és anaerobok ellen teljesen hatástalan.'
          : language === 'de'
          ? 'Linezolid ist ausschließlich gegen grampositive Erreger wirksam und bei gramnegativen oder anaeroben Erregern völlig unwirksam.'
          : 'Linezolid is exclusively effective against Gram-positive pathogens, having no efficacy against Gram-negatives or anaerobes.';
      }
    }
    else if (abId === 'azithromycin') {
      if (microbe.type === 'atypical') {
        if (microbe.id === 'c_burnetii') {
          susceptibility = 'I';
          mechanismNotes = language === 'hu'
            ? 'A makrolidok mérsékelt hatásúak Q-lázban, az elsővonalbeli kezelés a doxiciklin.'
            : language === 'de'
            ? 'Makrolide sind bei Q-Fieber mäßig wirksam; die Behandlung der ersten Wahl ist Doxycyclin.'
            : 'Macrolides have moderate efficacy in Q fever; the first-line treatment is doxycycline.';
        } else {
          susceptibility = 'S';
          mechanismNotes = language === 'hu'
            ? 'Atípusos és sejten belüli kórokozók ellen kiváló sejtpenetrációja révén az egyik legfontosabb elsővonalbeli szer.'
            : language === 'de'
            ? 'Aufgrund seiner hervorragenden Zellpenetration einer der wichtigsten First-Line-Wirkstoffe gegen atypische und intrazelluläre Erreger.'
            : 'One of the most important first-line agents against atypical and intracellular pathogens due to its excellent cellular penetration.';
        }
      } else if (microbe.type === 'gram-positive') {
        if (microbe.id === 's_aureus_mrsa' || microbe.id.startsWith('e_fae')) {
          susceptibility = 'R';
          mechanismNotes = language === 'hu'
            ? 'MRSA és Enterococcus törzsek esetén a makrolid rezisztencia rendkívül gyakori.'
            : language === 'de'
            ? 'Unter MRSA- und Enterokokken-Stämmen ist die Makrolidresistenz extrem häufig.'
            : 'Macrolide resistance is extremely common among MRSA and Enterococcus strains.';
        } else if (microbe.id === 's_pneumoniae_r') {
          susceptibility = 'R';
          mechanismNotes = language === 'hu'
            ? 'A penicillin-rezisztens pneumococcusok többsége az erm gének általi MLS_B mechanizmussal a makrolidokra is rezisztens.'
            : language === 'de'
            ? 'Die meisten Penicillin-resistenten Pneumokokken sind aufgrund des MLS_B-Mechanismus über erm-Gene auch gegen Makrolide resistent.'
            : 'Most penicillin-resistant pneumococci are also resistant to macrolides due to the MLS_B mechanism via erm genes.';
        } else {
          susceptibility = 'S';
          mechanismNotes = language === 'hu'
            ? 'Gram-pozitív légúti kórokozók ellen általában jó hatású, de a rezisztencia aránya növekszik.'
            : language === 'de'
            ? 'In der Regel gut wirksam gegen grampositive Erreger der Atemwege, die Resitenzrate nimmt jedoch zu.'
            : 'Generally effective against Gram-positive respiratory pathogens, though resistance rates are increasing.';
        }
      } else {
        susceptibility = 'R';
        mechanismNotes = language === 'hu'
          ? 'Szisztémás Gram-negatív és anaerob kórokozók ellen hatástalan.'
          : language === 'de'
          ? 'Unwirksam gegen systemische gramnegative und anaerobe Erreger.'
          : 'Ineffective against systemic Gram-negative and anaerobic pathogens.';
      }
    }
    else if (abId === 'doxycycline') {
      if (microbe.type === 'atypical') {
        susceptibility = 'S';
        mechanismNotes = language === 'hu'
          ? 'Kiváló sejtpenetrációjú széles spektrumú tetracyclin, az atípusos és zoonotikus fertőzések elsővonalbeli szere.'
          : language === 'de'
          ? 'Breitband-Tetracyclin mit hervorragender Zellpenetration, First-Line-Mittel bei atypischen und zoonotischen Infektionen.'
          : 'Broad-spectrum tetracycline with excellent cellular penetration, the drug of choice for atypical and zoonotic infections.';
      } else if (microbe.type === 'gram-positive') {
        if (microbe.id === 's_pneumoniae_r' || microbe.id.startsWith('e_fae')) {
          susceptibility = 'I';
          mechanismNotes = language === 'hu'
            ? 'Mérsékelt vagy bizonytalan hatás, rezisztencia-tesztelés javasolt.'
            : language === 'de'
            ? 'Mäßige oder unsichere Wirkung, Resistenztestung empfohlen.'
            : 'Moderate or uncertain efficacy, susceptibility testing is recommended.';
        } else {
          susceptibility = 'S';
          mechanismNotes = language === 'hu'
            ? 'Gram-pozitív törzsek, beleértve a közösségi MRSA-t is, általában jól reagálnak rá.'
            : language === 'de'
            ? 'Grampositive Stämme, einschließlich ambulant erworbener MRSA, sprechen in der Regel gut darauf an.'
            : 'Gram-positive strains, including community-acquired MRSA, generally respond well.';
        }
      } else if (microbe.type === 'gram-negative') {
        if (microbe.id === 'e_coli_wild') {
          susceptibility = 'I';
          mechanismNotes = language === 'hu'
            ? 'A vad típusú törzsek mérsékelten érzékenyek lehetnek, de a szerzett rezisztencia aránya magas.'
            : language === 'de'
            ? 'Wildtyp-Stämme können mäßig empfindlich sein, aber die Rate der erworbenen Resistenz ist hoch.'
            : 'Wild-type strains may be moderately susceptible, but acquired resistance rates are high.';
        } else if (microbe.id === 'p_mirabilis') {
          susceptibility = 'R';
          mechanismNotes = language === 'hu'
            ? 'A Proteus fajok természetes (intrinsic) módon teljesen ellenállnak a tetracyclineknek.'
            : language === 'de'
            ? 'Proteus-Spezies sind von Natur aus (intrinsisch) völlig resistent gegen Tetracycline.'
            : 'Proteus species possess intrinsic (natural) resistance to all tetracyclines.';
        } else {
          susceptibility = 'R';
          mechanismNotes = language === 'hu'
            ? 'A legtöbb klinikai Gram-negatív pálca rezisztens aktív efflux pumpák vagy riboszómális védőfehérjék miatt.'
            : language === 'de'
            ? 'Die meisten klinischen gramnegativen Stäbchen sind aufgrund aktiver Effluxpumpen oder ribosomaler Schutzproteine resistent.'
            : 'Most clinical Gram-negative bacilli are resistant due to active efflux pumps or ribosomal protection proteins.';
        }
      } else if (microbe.type === 'anaerobe') {
        susceptibility = 'I';
        mechanismNotes = language === 'hu'
          ? 'Mérsékelt anaerob aktivitás, súlyos fertőzésekben nem megbízható önmagában.'
          : language === 'de'
          ? 'Mäßige anaerobe Aktivität, bei schweren Infektionen allein nicht zuverlässig.'
          : 'Moderate anaerobic activity, unreliable as monotherapy in severe infections.';
      }
    }
    else if (abId === 'ceftazidime') {
      if (microbe.type === 'gram-negative') {
        if (microbe.id === 'p_aeruginosa') {
          susceptibility = 'S';
          mechanismNotes = language === 'hu'
            ? 'Kifejezetten antipseudomonalis hatású 3. generációs cephalosporin.'
            : language === 'de'
            ? 'Cephalosporin der 3. Generation mit ausgeprägter antipseudomonaler Wirkung.'
            : 'Third-generation cephalosporin with pronounced antipseudomonal activity.';
        } else if (['e_coli_wild', 'k_pneumoniae_wild', 'p_mirabilis'].includes(microbe.id)) {
          susceptibility = 'S';
          mechanismNotes = language === 'hu'
            ? 'Kiváló Gram-negatív aktivitás az érzékeny, vad típusú törzsek ellen.'
            : language === 'de'
            ? 'Hervorragende gramnegative Aktivität gegen empfindliche Wildtyp-Stämme.'
            : 'Excellent Gram-negative activity against susceptible, wild-type strains.';
        } else if (['e_cloacae', 's_marcescens'].includes(microbe.id)) {
          susceptibility = 'I';
          mechanismNotes = language === 'hu'
            ? 'In vitro érzékeny lehet, de kezelés közben fennáll az AmpC béta-laktamáz derepressziójának (fokozott termelésének) veszélye.'
            : language === 'de'
            ? 'In vitro zwar empfindlich, aber unter Therapie besteht das Risiko einer AmpC-Beta-Laktamase-Derepression (übermäßige Produktion).'
            : 'May appear susceptible in vitro, but there is a significant risk of AmpC beta-lactamase derepression (overproduction) during therapy.';
        } else {
          susceptibility = 'R';
          mechanismNotes = language === 'hu'
            ? 'Rezisztens. Az ESBL-ek és carbapenemázok teljesen lebontják, az Acinetobacter MDR törzsek szintén ellenállnak.'
            : language === 'de'
            ? 'Resistent. Wird durch ESBLs und Carbapenemasen vollständig abgebaut; Acinetobacter-MDR-Stämme sind ebenfalls resistent.'
            : 'Resistant. Readily degraded by ESBLs and carbapenemases; multidrug-resistant Acinetobacter strains are also resistant.';
        }
      } else if (microbe.type === 'gram-positive') {
        if (['s_pyogenes', 's_pneumoniae_s'].includes(microbe.id)) {
          susceptibility = 'S';
          mechanismNotes = language === 'hu'
            ? 'Érzékeny, de a ceftazidim Gram-pozitív hatása jóval gyengébb, mint a ceftriaxoné.'
            : language === 'de'
            ? 'Empfindlich, aber die grampositive Wirkung von Ceftazidim ist deutlich schwächer als die von Ceftriaxon.'
            : 'Susceptible, but the Gram-positive efficacy of ceftazidime is significantly weaker than that of ceftriaxone.';
        } else {
          susceptibility = 'R';
          mechanismNotes = language === 'hu'
            ? 'A ceftazidim hatástalan az MSSA-ra, MRSA-ra, Enterococcusokra és Listeriára.'
            : language === 'de'
            ? 'Ceftazidim ist unwirksam gegen MSSA, MRSA, Enterokokken und Listerien.'
            : 'Ceftazidime is ineffective against MSSA, MRSA, Enterococci, and Listeria.';
        }
      } else {
        susceptibility = 'R';
        mechanismNotes = language === 'hu'
          ? 'Az anaerobok és atípusosak természetes módon rezisztensek rá.'
          : language === 'de'
          ? 'Anaerobier und atypische Erreger sind von Natur aus resistent.'
          : 'Anaerobic and atypical pathogens are intrinsically resistant.';
      }
    }
    else if (abId === 'cefepime') {
      if (microbe.type === 'gram-negative') {
        if (['p_aeruginosa', 'e_coli_wild', 'k_pneumoniae_wild', 'p_mirabilis'].includes(microbe.id)) {
          susceptibility = 'S';
          mechanismNotes = language === 'hu'
            ? 'Negyedik generációs zwitterion szerkezetű cephalosporin, kiváló Pseudomonas és Gram-negatív aktivitással.'
            : language === 'de'
            ? 'Cephalosporin der 4. Generation mit Zwitterion-Struktur, hervorragende Pseudomonas- und gramnegative Wirkung.'
            : 'Fourth-generation zwitterionic cephalosporin with excellent antipseudomonal and Gram-negative activity.';
        } else if (['e_cloacae', 's_marcescens'].includes(microbe.id)) {
          susceptibility = 'S';
          mechanismNotes = language === 'hu'
            ? 'Stabil az AmpC béta-laktamázzal szemben, így az Enterobacter és Serratia fertőzések elsővonalbeli szere.'
            : language === 'de'
            ? 'Stabil gegen AmpC-Beta-Laktamasen, daher ein First-Line-Mittel bei Enterobacter- und Serratia-Infektionen.'
            : 'Stable against AmpC beta-lactamases, making it a first-line drug for Enterobacter and Serratia infections.';
        } else {
          susceptibility = 'R';
          mechanismNotes = language === 'hu'
            ? 'Az ESBL-termelő és carbapenem-rezisztens (KPC, CRAB) törzsek lebontják vagy ellenállnak.'
            : language === 'de'
            ? 'ESBL-bildende und Carbapenem-resistente (KPC, CRAB) Stämme bauen es ab oder sind resistent.'
            : 'ESBL-producing and carbapenem-resistant (KPC, CRAB) strains degrade it or are resistant.';
        }
      } else if (microbe.type === 'gram-positive') {
        if (['s_pyogenes', 's_pneumoniae_s', 's_aureus_mssa'].includes(microbe.id)) {
          susceptibility = 'S';
          mechanismNotes = language === 'hu'
            ? 'Kiváló Gram-pozitív aktivitás, MSSA ellen is megbízható.'
            : language === 'de'
            ? 'Hervorragende grampositive Aktivität, auch gegen MSSA zuverlässig.'
            : 'Excellent Gram-positive activity, highly reliable against MSSA.';
        } else if (microbe.id === 's_pneumoniae_r') {
          susceptibility = 'I';
          mechanismNotes = language === 'hu'
            ? 'Penicillin-rezisztens pneumococcusok esetén csökkent affinitás, de magasabb dózissal még hatásos lehet.'
            : language === 'de'
            ? 'Reduzierte Affinität bei Penicillin-resistenten Pneumokokken, kann aber bei höherer Dosierung noch wirksam sein.'
            : 'Reduced affinity in penicillin-resistant pneumococci, but may still be effective at higher doses.';
        } else {
          susceptibility = 'R';
          mechanismNotes = language === 'hu'
            ? 'Az Enterococcusok és a Listeria természetes módon rezisztensek az összes cephalosporinra, az MRSA szintén ellenáll.'
            : language === 'de'
            ? 'Enterokokken und Listerien sind von Natur aus resistent gegen alle Cephalosporine; MRSA ist ebenfalls resistent.'
            : 'Enterococci and Listeria are intrinsically resistant to all cephalosporins; MRSA is also resistant.';
        }
      } else {
        susceptibility = 'R';
        mechanismNotes = language === 'hu'
          ? 'Az anaerobok és atípusosak rezisztensek rá.'
          : language === 'de'
          ? 'Anaerobier und atypische Erreger sind resistent.'
          : 'Anaerobes and atypicals are resistant.';
      }
    }
    else if (abId === 'ceftolozane_tazobactam') {
      if (microbe.type === 'gram-negative') {
        if (['p_aeruginosa', 'e_coli_wild', 'k_pneumoniae_wild', 'p_mirabilis', 'e_cloacae', 's_marcescens', 'e_coli_esbl'].includes(microbe.id)) {
          susceptibility = 'S';
          mechanismNotes = language === 'hu'
            ? 'Korszerű kombináció, amely stabil a Pseudomonas rezisztencia-mechanizmusaival és az ESBL enzimekkel szemben.'
            : language === 'de'
            ? 'Moderne Kombination, stabil gegen Pseudomonas-Resistenzmechanismen und ESBL-Enzyme.'
            : 'Advanced combination stable against Pseudomonas resistance mechanisms and ESBL enzymes.';
        } else {
          susceptibility = 'R';
          mechanismNotes = language === 'hu'
            ? 'A carbapenemáz-termelő (KPC) és MDR Acinetobacter törzsek lebontják és rezisztensek rá.'
            : language === 'de'
            ? 'Carbapenemase-bildende (KPC) und MDR Acinetobacter-Stämme bauen es ab und sind resistent.'
            : 'Carbapenemase-producing (KPC) and MDR Acinetobacter strains degrade it and are resistant.';
        }
      } else if (microbe.type === 'gram-positive') {
        if (['s_pyogenes', 's_pneumoniae_s'].includes(microbe.id)) {
          susceptibility = 'S';
          mechanismNotes = language === 'hu'
            ? 'Streptococcusok ellen kiváló aktivitással rendelkezik.'
            : language === 'de'
            ? 'Weist eine hervorragende Aktivität gegen Streptokokken auf.'
            : 'Demonstrates excellent activity against Streptococci.';
        } else {
          susceptibility = 'R';
          mechanismNotes = language === 'hu'
            ? 'Korlátozott Gram-pozitív aktivitás: MSSA, MRSA, Enterococcusok és Listeria ellen nem ajánlott.'
            : language === 'de'
            ? 'Eingeschränkte grampositive Aktivität; nicht empfohlen gegen MSSA, MRSA, Enterokokken und Listerien.'
            : 'Limited Gram-positive coverage; not recommended for MSSA, MRSA, Enterococci, or Listeria.';
        }
      } else if (microbe.type === 'anaerobe') {
        susceptibility = 'I';
        mechanismNotes = language === 'hu'
          ? 'Mérsékelt anaerob hatás a tazobaktam komponens révén, de súlyos kevert hasi fertőzésekben metronidazol hozzáadása javasolt.'
          : language === 'de'
          ? 'Mäßige anaerobe Wirkung durch die Tazobactam-Komponente; bei schweren gemischten abdominellen Infektionen wird die Zugabe von Metronidazol empfohlen.'
          : 'Moderate anaerobic coverage via the tazobactam component; adding metronidazole is recommended in severe mixed abdominal infections.';
      } else {
        susceptibility = 'R';
        mechanismNotes = language === 'hu'
          ? 'Az atípusos kórokozók teljesen rezisztensek.'
          : language === 'de'
          ? 'Atypische Erreger sind völlig resistent.'
          : 'Atypical pathogens are completely resistant.';
      }
    }

    return {
      antibioticId: abId,
      antibioticName: globalAb.name,
      susceptibility,
      mechanismNotes
    };
  };

  const getCellColors = (susceptibility: 'S' | 'I' | 'R') => {
    switch (susceptibility) {
      case 'S': return 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-emerald-200';
      case 'I': return 'bg-amber-100 text-amber-800 hover:bg-amber-200 border-amber-200';
      case 'R': return 'bg-red-100 text-red-800 hover:bg-red-200 border-red-200';
      default: return 'bg-slate-50 text-slate-400 border-slate-100';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'gram-positive': return t('GRAM_POSITIVE_SHORT');
      case 'gram-negative': return t('GRAM_NEGATIVE_SHORT');
      case 'atypical': return t('ATYPICAL_SHORT');
      case 'anaerobe': return t('ANAEROBE_SHORT');
      default: return type;
    }
  };

  const getFullTypeLabel = (type: string) => {
    switch (type) {
      case 'gram-positive': return t('GRAM_POSITIVE_BACTERIUM');
      case 'gram-negative': return t('GRAM_NEGATIVE_BACTERIUM');
      case 'atypical': return t('ATYPICAL_BACTERIUM');
      case 'anaerobe': return t('ANAEROBE_BACTERIUM');
      default: return type;
    }
  };

  return (
    <div id="microbiology-view" className="space-y-6">
      {/* View Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-2">
            <Bug className="w-6 h-6 text-blue-600" />
            {t('MICRO_TITLE')}
          </h2>
          <p className="text-slate-500 text-sm mt-0.5">
            {t('MICRO_SUBTITLE')}
          </p>
        </div>
        
        {/* View Mode Toggle */}
        <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200/50 self-end text-xs">
          <button
            onClick={() => setViewMode('matrix')}
            className={`px-3 py-1.5 rounded-md font-semibold transition-all flex items-center gap-1.5 ${
              viewMode === 'matrix' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            <Grid className="w-3.5 h-3.5" /> {t('SENSITIVITY_MATRIX')}
          </button>
          <button
            onClick={() => {
              setViewMode('cards');
              if (!selectedMicrobe) setSelectedMicrobe(microbesData[0]);
            }}
            className={`px-3 py-1.5 rounded-md font-semibold transition-all flex items-center gap-1.5 ${
              viewMode === 'cards' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            <Bug className="w-3.5 h-3.5" /> {t('DETAILED_PATHOGEN_CARDS')}
          </button>
        </div>
      </div>

      {viewMode === 'matrix' ? (
        /* INTERACTIVE S/I/R MATRIX VIEW */
        <div className="space-y-6">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-4 text-xs">
              <div className="flex items-center gap-1.5 font-semibold text-slate-600">
                <div className="w-4 h-4 rounded bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800 text-[10px] font-bold">S</div>
                <span>{t('LEGEND_S')}</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold text-slate-600">
                <div className="w-4 h-4 rounded bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 text-[10px] font-bold">I</div>
                <span>{t('LEGEND_I')}</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold text-slate-600">
                <div className="w-4 h-4 rounded bg-red-100 border border-red-300 flex items-center justify-center text-red-800 text-[10px] font-bold">R</div>
                <span>{t('LEGEND_R')}</span>
              </div>
            </div>
            <div className="text-xs text-slate-500 font-medium">
              💡 <em>{t('CLICK_CELL_PROMPT')}</em>
            </div>
          </div>

          {/* Scrollable Grid Table */}
          <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-sm">
            <table className="w-full border-collapse text-left text-xs min-w-[800px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-3 font-semibold text-slate-700 sticky left-0 bg-slate-50 border-r border-slate-200 w-[200px] z-10">
                    {t('PATHOGEN_BACTERIUM')}
                  </th>
                  {matrixAntibiotics.map(ab => (
                    <th key={ab.id} className="p-3 font-bold text-slate-600 text-center uppercase tracking-wider" title={tg(antibioticsData.find(a => a.id === ab.id)?.name)}>
                      {ab.shortName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {microbesData.map(microbe => (
                  <tr key={microbe.id} className="hover:bg-slate-50/50">
                    {/* Pathogen row header stickied to left for great side scroll */}
                    <td className="p-3 font-bold text-slate-700 sticky left-0 bg-white border-r border-slate-200 z-10 flex flex-col shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                      <span className="italic truncate max-w-[190px]">{tg(microbe.name)}</span>
                      <span className="text-[9px] uppercase font-semibold text-slate-400 mt-0.5">
                        {getTypeLabel(microbe.type)}
                      </span>
                    </td>

                    {/* Susceptibility Cells */}
                    {matrixAntibiotics.map(ab => {
                      const cell = getCellData(microbe, ab.id);
                      if (!cell) {
                        return <td key={ab.id} className="p-3 text-center text-slate-300">-</td>;
                      }

                      const isSelected = clickedCell?.microbe.id === microbe.id && clickedCell?.res.antibioticId === ab.id;

                      return (
                        <td
                          key={ab.id}
                          onMouseEnter={() => setHoveredCell({ microbeId: microbe.id, abId: ab.id })}
                          onMouseLeave={() => setHoveredCell(null)}
                          onClick={() => setClickedCell({ microbe, res: cell })}
                          className={`p-3 text-center border-r border-slate-100 font-extrabold cursor-pointer transition-all duration-150 border-b ${getCellColors(cell.susceptibility)} ${
                            isSelected ? 'ring-4 ring-blue-500/30 scale-95 z-20 shadow-inner' : ''
                          }`}
                        >
                          {cell.susceptibility}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Abbreviation legend */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">{t('MATRIX_ABBREVIATIONS')}:</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-x-4 gap-y-1.5 text-xs text-slate-600">
              {matrixAntibiotics.map(ab => (
                <div key={ab.id} className="flex gap-1.5">
                  <span className="font-bold text-blue-700 w-8 shrink-0">{ab.shortName}:</span>
                  <span className="truncate">{tg(antibioticsData.find(a => a.id === ab.id)?.name.split(' (')[0])}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Clicked cell details display */}
          {clickedCell && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl border border-blue-200 shadow-md overflow-hidden"
            >
              <div className="bg-slate-900 border-b border-slate-800 p-4 text-white flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-blue-400 shrink-0" />
                  <span className="font-bold text-sm">
                    {t('RESISTANCE_DETAILS')}: <span className="italic">{tg(clickedCell.microbe.name)}</span> ↔ <span>{tg(clickedCell.res.antibioticName)}</span>
                  </span>
                </div>
                <button
                  onClick={() => setClickedCell(null)}
                  className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-lg text-xs"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 font-semibold uppercase">{t('LABORATORY_STATUS')}:</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                    clickedCell.res.susceptibility === 'S' 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : clickedCell.res.susceptibility === 'I' 
                      ? 'bg-amber-100 text-amber-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {clickedCell.res.susceptibility === 'S' ? t('SENSITIVE_S') : clickedCell.res.susceptibility === 'I' ? t('INTERMEDIATE_I') : t('RESISTANT_R')}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-semibold uppercase block mb-1">{t('CLINICAL_EXPLANATION')}:</span>
                  <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100 font-medium">
                    <TransText text={clickedCell.res.mechanismNotes || t('DEFAULT_SENSITIVITY_EXPLAIN')} />
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      ) : (
        /*pathogen profiles browser view*/
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Microbe select list - 4 cols */}
          <div className="lg:col-span-4 space-y-2">
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">{t('CHOOSE_PATHOGEN')}</span>
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100">
              {microbesData.map(microbe => (
                <button
                  key={microbe.id}
                  onClick={() => setSelectedMicrobe(microbe)}
                  className={`w-full text-left p-4 transition-all duration-150 hover:bg-slate-50 block ${
                    selectedMicrobe?.id === microbe.id ? 'bg-blue-50/50 border-r-4 border-blue-600' : ''
                  }`}
                >
                  <h4 className="font-bold text-slate-800 text-sm italic">{tg(microbe.name)}</h4>
                  <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-bold uppercase mt-1 inline-block">
                    {getTypeLabel(microbe.type)}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Microbe detailed sheet - 8 cols */}
          <div className="lg:col-span-8">
            {selectedMicrobe ? (
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                {/* Profile header */}
                <div className="bg-slate-900 border-b border-slate-800 p-6 text-white">
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2.5 py-0.5 rounded-full font-bold border border-blue-500/30 uppercase tracking-wide">
                    {getFullTypeLabel(selectedMicrobe.type)}
                  </span>
                  <h3 className="text-2xl font-bold italic mt-2 tracking-tight">{tg(selectedMicrobe.name)}</h3>
                </div>

                {/* Profile content */}
                <div className="p-6 space-y-6">
                  {/* Clinical Importance */}
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t('CLINICAL_SIGNIFICANCE')}</h4>
                    <p className="text-sm text-slate-700 leading-relaxed font-normal bg-slate-50 p-3.5 rounded-lg border border-slate-100">
                      <TransText text={selectedMicrobe.clinicalImportance} />
                    </p>
                  </div>

                  {/* Resistance mechanisms */}
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                      <AlertCircle className="w-4 h-4 text-amber-500" />
                      {t('KEY_RESISTANCE_MECHANISMS')}
                    </h4>
                    <p className="text-sm text-slate-700 leading-relaxed bg-amber-50/30 p-3.5 rounded-lg border border-amber-200/50 font-normal">
                      <TransText text={selectedMicrobe.resistanceMechanisms} />
                    </p>
                  </div>

                  {/* Susceptibility list */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t('SUSCEPTIBILITY_CARD')}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {matrixAntibiotics.map((ab) => {
                        const res = getCellData(selectedMicrobe, ab.id);
                        if (!res) return null;
                        return (
                          <div key={ab.id} className="p-3 border border-slate-100 rounded-lg flex items-center justify-between bg-slate-50/50">
                            <span className="text-xs font-bold text-slate-700">{tg(res.antibioticName)}</span>
                            <div className="flex items-center gap-2">
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                                res.susceptibility === 'S'
                                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                  : res.susceptibility === 'I'
                                  ? 'bg-amber-50 text-amber-700 border-amber-200'
                                  : 'bg-red-50 text-red-700 border-red-200'
                              }`}>
                                {res.susceptibility === 'S' ? t('SENSITIVE_S') : res.susceptibility === 'I' ? t('INTERMEDIATE_I') : t('RESISTANT_R')}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Preferred drugs list */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2">
                    <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-600 font-extrabold" />
                      {t('FIRST_LINE_DRUGS')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMicrobe.firstLineDrugs.map(drugId => {
                        const drug = antibioticsData.find(a => a.id === drugId);
                        return (
                          <span key={drugId} className="px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-semibold text-blue-700">
                            {drug ? tg(drug.name) : drugId}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-slate-50 border border-dashed border-slate-200 rounded-xl py-24 text-center text-slate-400 h-full flex flex-col justify-center items-center">
                <Bug className="w-12 h-12 text-slate-300 mb-2" />
                <p className="font-medium">{t('CHOOSE_MICROORGANISM')}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
