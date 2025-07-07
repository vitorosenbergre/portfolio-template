
import cftv1 from '../assets/images/cftv-1.jpeg';
import cftv2 from '../assets/images/cftv-2.jpeg';
import cftv3 from '../assets/images/cftv-3.jpeg';
import cftv4 from '../assets/images/cftv-4.jpeg';
import logica1 from '../assets/images/logica-1.jpeg';
import logica2 from '../assets/images/logica-2.jpeg';
import logica3 from '../assets/images/logica-3.jpeg';
import rede1 from '../assets/images/rede-1.jpeg';
import rede2 from '../assets/images/rede-2.jpeg';
import rede3 from '../assets/images/rede-3.jpeg';

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
    id: 'cftv-autocad',
    title: 'PROJETO DE CFTV - NO SOFTWARE AUTOCAD',
    description: 'Projeto de sistema de CFTV para segurança predial, elaborado no AutoCAD, incluindo layout de câmeras e infraestrutura.',
    longDescription: 'Este projeto consistiu na elaboração de um sistema de Circuito Fechado de Televisão (CFTV) para um edifício comercial. Utilizando o AutoCAD, foi realizado o planejamento completo do layout das câmeras de segurança, a definição dos pontos de instalação, a especificação dos equipamentos (câmeras, DVRs, fontes de alimentação) e o detalhamento da infraestrutura de cabos e conduítes. O objetivo foi garantir a cobertura total das áreas críticas, como entradas, saídas, corredores e estacionamento, visando a máxima segurança do local.',
    imageUrls: [cftv1, cftv2, cftv3, cftv4],
    projectUrl: '#',
    repoUrl: '#',
    technologies: ['AutoCAD', 'CFTV', 'Segurança Eletrônica', 'Layout de Plantas']
  },
  {
    id: 'logica-autocad',
    title: 'PROJETO DE LÓGICA - NO SOFTWARE AUTOCAD',
    description: 'Desenvolvimento de um projeto de lógica de controle para automação, utilizando o AutoCAD para a documentação.',
    longDescription: 'Neste projeto, foi desenvolvido um sistema de controle lógico para um processo de automação industrial. A documentação completa, incluindo diagramas de lógica, fluxogramas de processo e esquemas elétricos, foi elaborada no AutoCAD. O sistema foi projetado para controlar uma sequência de operações em uma esteira transportadora, utilizando sensores e atuadores para garantir o fluxo correto dos produtos. O foco foi na clareza da documentação e na robustez da lógica de controle.',
    imageUrls: [logica1, logica2, logica3],
    projectUrl: '#',
    repoUrl: '#',
    technologies: ['AutoCAD', 'Lógica de Controle', 'Automação Industrial', 'Diagramas Elétricos']
  },
  {
    id: 'rede-comum-autocad',
    title: 'PROJETO DE REDE COMUM (TOMADA E ILUMINAÇÃO) - NO SOFTWARE AUTOCAD',
    description: 'Elaboração de projeto elétrico predial para rede de tomadas e iluminação, documentado no AutoCAD.',
    longDescription: 'Este projeto envolveu a criação de um projeto elétrico completo para a rede de tomadas e iluminação de uma residência. Utilizando o AutoCAD, foram elaboradas as plantas baixas com a distribuição dos pontos de luz e tomadas, o dimensionamento dos circuitos elétricos, a especificação dos disjuntores e a definição do quadro de distribuição. O projeto seguiu as normas técnicas vigentes para garantir a segurança e a eficiência da instalação elétrica.',
    imageUrls: [rede1, rede2, rede3],
    projectUrl: '#',
    repoUrl: '#',
    technologies: ['AutoCAD', 'Instalações Elétricas Prediais', 'Dimensionamento de Circuitos', 'Normas ABNT']
  }
];
