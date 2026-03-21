export interface Module {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  file: string;
}

export const modules: Module[] = [
  {
    id: '00',
    slug: 'home',
    title: 'Central de Treinamento',
    shortTitle: 'Home',
    icon: '🏠',
    file: '00-home.md',
  },
  {
    id: '01',
    slug: 'modelo-de-negocio',
    title: 'Modelo de Negócio',
    shortTitle: 'Modelo de Negócio',
    icon: '💼',
    file: '01-modelo-de-negocio.md',
  },
  {
    id: '02',
    slug: 'mercado-icp',
    title: 'Mercado & ICP',
    shortTitle: 'Mercado & ICP',
    icon: '🎯',
    file: '02-mercado-icp.md',
  },
  {
    id: '03',
    slug: 'prospeccao-ativa',
    title: 'Prospecção Ativa',
    shortTitle: 'Prospecção',
    icon: '📞',
    file: '03-prospeccao-ativa.md',
  },
  {
    id: '04',
    slug: 'vendas-fechamento',
    title: 'Vendas & Fechamento',
    shortTitle: 'Vendas',
    icon: '🤝',
    file: '04-vendas-fechamento.md',
  },
  {
    id: '05',
    slug: 'marketing-digital',
    title: 'Marketing Digital',
    shortTitle: 'Marketing',
    icon: '📱',
    file: '05-marketing-digital.md',
  },
  {
    id: '06',
    slug: 'playbook-execucao',
    title: 'Playbook de Execução',
    shortTitle: 'Playbook',
    icon: '📋',
    file: '06-playbook-execucao.md',
  },
  {
    id: '07',
    slug: 'oferta-grand-slam',
    title: 'Oferta Grand Slam',
    shortTitle: 'Grand Slam',
    icon: '🏆',
    file: '07-oferta-grand-slam.md',
  },
];
