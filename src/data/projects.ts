import img1Projeto1 from '../assets/images/projetos/PROJETO 1/IMG 1 -PROJETO DE INSTALAÇÕES ELÉTRICAS.png';
import img2Projeto1 from '../assets/images/projetos/PROJETO 1/IMG 2 -PROJETO DE INSTALAÇÕES ELÉTRICAS.png';
import img3Projeto1 from '../assets/images/projetos/PROJETO 1/IMG 3 -PROJETO DE INSTALAÇÕES ELÉTRICAS.png';
import img4Projeto1 from '../assets/images/projetos/PROJETO 1/IMG 4 -PROJETO DE INSTALAÇÕES ELÉTRICAS.png';
import img5Projeto1 from '../assets/images/projetos/PROJETO 1/IMG 5 -PROJETO DE INSTALAÇÕES ELÉTRICAS.png';
import img1Projeto2 from '../assets/images/projetos/PROJETO 2/IMG 1 - PROJETO LUMINOTÉCNICO.png';
import img2Projeto2 from '../assets/images/projetos/PROJETO 2/IMG 2 - PROJETO LUMINOTÉCNICO.png';
import img3Projeto2 from '../assets/images/projetos/PROJETO 2/IMG 3 - PROJETO LUMINOTÉCNICO.jpg';
import img1Projeto3 from '../assets/images/projetos/PROJETO 3/IMG 1 - PROJETO DE LÓGICA.png';
import img2Projeto3 from '../assets/images/projetos/PROJETO 3/IMG 2 - PROJETO DE LÓGICA.png';
import img1Projeto4 from '../assets/images/projetos/PROJETO 4/IMG 1 - Projeto de Alimentação do PPCI.png';
import img2Projeto4 from '../assets/images/projetos/PROJETO 4/IMG 2 - Projeto de Alimentação do PPCI.png';
import img3Projeto4 from '../assets/images/projetos/PROJETO 4/IMG 3 - Projeto de Alimentação do PPCI.png';
import img4Projeto4 from '../assets/images/projetos/PROJETO 4/IMG 4 - Projeto de Alimentação do PPCI.png';
import img5Projeto4 from '../assets/images/projetos/PROJETO 4/IMG 5 - Projeto de Alimentação do PPCI.png';
import img1Projeto5 from '../assets/images/projetos/PROJETO 5/IMG 1 - Projeto de CFTV.png';
import img2Projeto5 from '../assets/images/projetos/PROJETO 5/IMG 2 -Projeto de CFTV.png';
import img3Projeto5 from '../assets/images/projetos/PROJETO 5/IMG 3 -Projeto de CFTV.png';
import img1Projeto6 from '../assets/images/projetos/PROJETO 6/IMG 1 - Projeto Completo de SPDA.png';
import img2Projeto6 from '../assets/images/projetos/PROJETO 6/IMG 2 - Projeto Completo de SPDA.png';
import img3Projeto6 from '../assets/images/projetos/PROJETO 6/IMG 3 - Projeto Completo de SPDA.png';
import img1Projeto7 from '../assets/images/projetos/PROJETO 7/IMG 1 - Projeto e execução de Energia Solar.jpg';
import img2Projeto7 from '../assets/images/projetos/PROJETO 7/IMG 1  - Projeto e execução de Energia Solar.png';
import img3Projeto7 from '../assets/images/projetos/PROJETO 7/IMG 2  - Projeto e execução de Energia Solar.png';
import img4Projeto7 from '../assets/images/projetos/PROJETO 7/IMG 3 - Projeto e execução de Energia Solar.png';
import img1Projeto8 from '../assets/images/projetos/PROJETO 8/IMG 1 - Laudos Técnicos.png';
import img2Projeto8 from '../assets/images/projetos/PROJETO 8/IMG 2 - Laudos Técnicos.png';
import img3Projeto8 from '../assets/images/projetos/PROJETO 8/IMG 3 - Laudos Técnicos.png';
import img4Projeto8 from '../assets/images/projetos/PROJETO 8/IMG 4 - Laudos Técnicos.png';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrls: string[];
  projectUrl: string;
  repoUrl: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: 'projeto-instalacoes-eletricas',
    title: 'PROJETO DE INSTALAÇÕES ELÉTRICAS REDE COMUM (TOMADA E ILUMINAÇÃO) – AUTOCAD E REVI',
    description: 'Projetos completos de instalações elétricas de baixa tensão, desenvolvidos de acordo com a NBR 5410, abrangendo circuitos de tomadas e iluminação com foco em segurança, eficiência e clareza para execução em obra. Modelados em AutoCAD e Revit, com apresentação técnica precisa e compatível com metodologias BIM. Ideal para residências, comércios e edificações em general.',
    longDescription: 'Projetos completos de instalações elétricas de baixa tensão, desenvolvidos de acordo com a NBR 5410, abrangendo circuitos de tomadas e iluminação com foco em segurança, eficiência e clareza para execução em obra. Modelados em AutoCAD e Revit, com apresentação técnica precisa e compatível com metodologias BIM. Ideal para residências, comércios e edificações em general.',
    imageUrls: [img1Projeto1, img2Projeto1, img3Projeto1, img4Projeto1, img5Projeto1],
    projectUrl: '#',
    repoUrl: '#',
    technologies: ['AUTOCAD', 'REVIT', 'INSTALAÇÕES ELÉTRICAS']
  },
  {
    id: 'projeto-luminotecnico',
    title: 'PROJETO LUMINOTÉCNICO (ILUMINAÇÃO) – DIALUX',
    description: 'Projetos luminotécnicos elaborados com base nas normas técnicas vigentes e critérios de eficiência energética, conforto visual e estética. Utilização do software Dialux para simulação e dimensionamento de sistemas de iluminação, garantindo níveis adequados de iluminância para cada tipo de ambiente. Indicado para projetos residenciais, comerciais, industriais e institucionais que exijam qualidade, desempenho e conformidade normativa.',
    longDescription: 'Projetos luminotécnicos elaborados com base nas normas técnicas vigentes e critérios de eficiência energética, conforto visual e estética. Utilização do software Dialux para simulação e dimensionamento de sistemas de iluminação, garantindo níveis adequados de iluminância para cada tipo de ambiente. Indicado para projetos residenciais, comerciais, industriais e institucionais que exijam qualidade, desempenho e conformidade normativa.',
    imageUrls: [img1Projeto2, img2Projeto2, img3Projeto2],
    projectUrl: '#',
    repoUrl: '#',
    technologies: ['INSTALAÇÕES ELÉTRICAS', 'DIALUX']
  },
  {
    id: 'projeto-logica',
    title: 'PROJETO DE LÓGICA – AUTOCAD',
    description: 'Projetos destinados à distribuição lógica de pontos de dados, voz, internet, TV e Wi-Fi, elaborados em AutoCAD com organização clara e padronizada. Inclui o posicionamento estratégico de tomadas de rede, pontos de acesso (Wi-Fi), pontos de mesa e pontos de TV, garantindo conectividade eficiente e adequada ao uso do ambiente. Ideal para residências, comércios e escritórios que necessitam de uma infraestrutura moderna, funcional e bem planejada.',
    longDescription: 'Projetos destinados à distribuição lógica de pontos de dados, voz, internet, TV e Wi-Fi, elaborados em AutoCAD com organização clara e padronizada. Inclui o posicionamento estratégico de tomadas de rede, pontos de acesso (Wi-Fi), pontos de mesa e pontos de TV, garantindo conectividade eficiente e adequada ao uso do ambiente. Ideal para residências, comércios e escritórios que necessitam de uma infraestrutura moderna, funcional e bem planejada.',
    imageUrls: [img1Projeto3, img2Projeto3],
    projectUrl: '#',
    repoUrl: '#',
    technologies: ['INSTALAÇÕES ELÉTRICAS', 'AUTOCAD']
  },
  {
    id: 'projeto-alimentacao-ppci',
    title: 'Projeto de Alimentação do PPCI – AutoCAD',
    description: 'Projeto voltado à alimentação elétrica dos sistemas que compõem o Plano de Prevenção e Proteção Contra Incêndio (PPCI), dividido em duas partes principais: alimentação da iluminação de emergência e alimentação do SDAI (Sistema de Detecção e Alarme de Incêndio). Elaborado em AutoCAD, o projeto segue as normas técnicas vigentes e os requisitos dos bombeiros, assegurando confiabilidade, segurança e funcionamento adequado dos sistemas de emergência em situações críticas. Indicado para edificações residenciais, comerciais, industriais e institucionais.',
    longDescription: 'Projeto voltado à alimentação elétrica dos sistemas que compõem o Plano de Prevenção e Proteção Contra Incêndio (PPCI), dividido em duas partes principais: alimentação da iluminação de emergência e alimentação do SDAI (Sistema de Detecção e Alarme de Incêndio). Elaborado em AutoCAD, o projeto segue as normas técnicas vigentes e os requisitos dos bombeiros, assegurando confiabilidade, segurança e funcionamento adequado dos sistemas de emergência em situações críticas. Indicado para edificações residenciais, comerciais, industriais e institucionais.',
    imageUrls: [img1Projeto4, img2Projeto4, img3Projeto4, img4Projeto4, img5Projeto4],
    projectUrl: '#',
    repoUrl: '#',
    technologies: ['INSTALAÇÕES ELÉTRICAS', 'AUTOCAD']
  },
  {
    id: 'projeto-cftv',
    title: 'Projeto de CFTV – AutoCAD',
    description: 'Projeto completo de Circuito Fechado de Televisão (CFTV), com foco na definição de pontos de câmeras, áreas de cobertura, posicionamento de DVR/NVR e infraestrutura de cabeamento. Desenvolvido em AutoCAD, o projeto assegura organização, clareza e eficiência na instalação, permitindo um monitoramento eficaz de ambientes internos e externos. Ideal para residências, comércios, indústrias e instituições que demandam segurança e controle visual contínuo.',
    longDescription: 'Projeto completo de Circuito Fechado de Televisão (CFTV), com foco na definição de pontos de câmeras, áreas de cobertura, posicionamento de DVR/NVR e infraestrutura de cabeamento. Desenvolvido em AutoCAD, o projeto assegura organização, clareza e eficiência na instalação, permitindo um monitoramento eficaz de ambientes internos e externos. Ideal para residências, comércios, indústrias e instituições que demandam segurança e controle visual contínuo.',
    imageUrls: [img1Projeto5, img2Projeto5, img3Projeto5],
    projectUrl: '#',
    repoUrl: '#',
    technologies: ['INSTALAÇÕES ELÉTRICAS', 'AUTOCAD']
  },
  {
    id: 'projeto-spda',
    title: 'Projeto Completo de SPDA – AUTOCAD',
    description: 'O projeto de Sistema de Proteção contra Descargas Atmosféricas (SPDA) garante a proteção de edifícios e estruturas contra raios. Desenvolvido em AutoCAD, ele inclui o planejamento da captação, descidas, sistema de aterramento e a análise de risco do local. O projeto dimensiona as áreas de proteção, define a instalação do aterramento e prevê a segurança de equipamentos sensíveis. Também inclui um plano de manutenção e monitoramento contínuo para garantir o bom funcionamento do sistema. É ideal para residências, comércios, indústrias e instituições públicas e privadas, oferecendo segurança e prevenção contra danos causados por raios.',
    longDescription: 'O projeto de Sistema de Proteção contra Descargas Atmosféricas (SPDA) garante a proteção de edifícios e estruturas contra raios. Desenvolvido em AutoCAD, ele inclui o planejamento da captação, descidas, sistema de aterramento e a análise de risco do local. O projeto dimensiona as áreas de proteção, define a instalação do aterramento e prevê a segurança de equipamentos sensíveis. Também inclui um plano de manutenção e monitoramento contínuo para garantir o bom funcionamento do sistema. É ideal para residências, comércios, indústrias e instituições públicas e privadas, oferecendo segurança e prevenção contra danos causados por raios.',
    imageUrls: [img1Projeto6, img2Projeto6, img3Projeto6],
    projectUrl: '#',
    repoUrl: '#',
    technologies: ['INSTALAÇÕES ELÉTRICAS', 'AUTOCAD', 'SPDA']
  },
  {
    id: 'projeto-energia-solar',
    title: 'Projeto e execução de Energia Sola',
    description: 'O projeto de energia solar envolve o dimensionamento e a instalação de sistemas fotovoltaicos para gerar energia limpa e sustentável. Ele inclui a avaliação do local, a definição da quantidade de painéis solares necessários, a escolha dos inversores adequados e o planejamento de toda a infraestrutura, como cabeamento e proteção elétrica. O projeto também abrange a integração do sistema à rede elétrica, garantindo sua eficiência e segurança. Ideal para residências, comércios, indústrias e instituições, o sistema de energia solar oferece redução de custos com eletricidade e contribui para a preservação ambiental.',
    longDescription: 'O projeto de energia solar envolve o dimensionamento e a instalação de sistemas fotovoltaicos para gerar energia limpa e sustentável. Ele inclui a avaliação do local, a definição da quantidade de painéis solares necessários, a escolha dos inversores adequados e o planejamento de toda a infraestrutura, como cabeamento e proteção elétrica. O projeto também abrange a integração do sistema à rede elétrica, garantindo sua eficiência e segurança. Ideal para residências, comércios, indústrias e instituições, o sistema de energia solar oferece redução de custos com eletricidade e contribui para a preservação ambiental.',
    imageUrls: [img1Projeto7, img2Projeto7, img3Projeto7, img4Projeto7],
    projectUrl: '#',
    repoUrl: '#',
    technologies: ['INSTALAÇÕES ELÉTRICAS', 'SOLAR']
  },
  {
    id: 'laudos-tecnicos',
    title: 'Laudos Técnicos: Sondagem geoelétrica do Solo, Continuidade de SPDA e Relatório de Não Conformidades Elétricas',
    description: 'Os laudos técnicos de segurança e conformidade elétrica garantem a eficácia dos sistemas de proteção e aterramento de uma instalação. O Laudo de Continuidade de SPDA verifica se as conexões entre os condutores e os aterramentos estão funcionando corretamente, garantindo que o sistema de proteção contra descargas atmosféricas conduza a corrente elétrica para o solo de forma segura.\n\n O Laudo de Sondagem Geoelétrica do Solo analisa a resistividade do solo, essencial para dimensionar o sistema de aterramento e garantir que ele dissipe adequadamente a corrente elétrica, atendendo às normas de segurança.\n\n O Relatório de Não Conformidades Elétricas identifica falhas no sistema elétrico, como fiações inadecuadas e conexões defeituosas. Ele documenta os problemas e sugere ações corretivas para garantir que a instalação esteja em conformidade com as normas de segurança elétrica.',
    longDescription: 'Os laudos técnicos de segurança e conformidade elétrica garantem a eficácia dos sistemas de proteção e aterramento de uma instalação. O Laudo de Continuidade de SPDA verifica se as conexões entre os condutores e os aterramentos estão funcionando corretamente, garantindo que o sistema de proteção contra descargas atmosféricas conduza a corrente elétrica para o solo de forma segura.\n\n O Laudo de Sondagem Geoelétrica do Solo analisa a resistividade do solo, essencial para dimensionar o sistema de aterramento e garantir que ele dissipe adequadamente a corrente elétrica, atendendo às normas de segurança.\n\n O Relatório de Não Conformidades Elétricas identifica falhas no sistema elétrico, como fiações inadequadas e conexões defeituosas. Ele documenta os problemas e sugere ações corretivas para garantir que a instalação esteja em conformidade com as normas de segurança elétrica.',
    imageUrls: [img1Projeto8, img2Projeto8, img3Projeto8, img4Projeto8],
    projectUrl: '#',
    repoUrl: '#',
    technologies: ['LAUDOS TÉCNICOS']
  }
];