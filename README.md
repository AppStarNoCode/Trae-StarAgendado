# StarAgendado - Sistema de Agendamento

![StarAgendado Logo](./src/assets/star-agendado-logo.png)

## 📋 Sobre o Projeto

O **StarAgendado** é um sistema SaaS completo de agendamento online desenvolvido especialmente para clínicas de estética, salões de beleza e outros estabelecimentos que necessitam de gestão de agendamentos. O sistema oferece uma plataforma robusta e intuitiva para gerenciar clientes, profissionais, serviços e relatórios.

## 🚀 Tecnologias Utilizadas

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **UI Framework**: Tailwind CSS + shadcn/ui
- **Backend**: Supabase (PostgreSQL + Auth + Storage)
- **Roteamento**: React Router DOM
- **Gerenciamento de Estado**: React Query (TanStack Query)
- **Formulários**: React Hook Form + Zod
- **Gráficos**: Recharts
- **Pagamentos**: Integração com Mercado Pago
- **Notificações**: Sonner + React Hot Toast

## ✨ Funcionalidades Principais

### 🔐 Autenticação e Autorização
- Sistema de login seguro com Supabase Auth
- Controle de acesso baseado em roles (Admin, Owner, User)
- Autenticação para clientes e administradores

### 🏪 Gestão Multi-loja
- Suporte a múltiplas lojas/estabelecimentos
- Configurações personalizadas por loja
- Gestão independente de cada estabelecimento

### 📅 Sistema de Agendamentos
- Interface intuitiva para agendamento de clientes
- Seleção de profissionais e serviços
- Controle de disponibilidade em tempo real
- Confirmação automática de agendamentos

### 👥 Gestão de Profissionais
- Cadastro e gerenciamento de profissionais
- Controle de horários e disponibilidade
- Associação de serviços por profissional

### 💰 Relatórios e Analytics
- Dashboard com métricas em tempo real
- Relatórios de agendamentos
- Relatórios financeiros e de caixa
- Análise de performance por profissional

### ⚙️ Configurações Avançadas
- Personalização de cores e tema por loja
- Configuração de horários de funcionamento
- Integração com APIs externas (Mercado Pago, Chatbot)
- Gestão de cupons e promoções

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Conta no Supabase

### Passos para instalação

1. **Clone o repositório**
```bash
git clone https://github.com/AppStarNoCode/Trae-StarAgendado.git
cd Trae-StarAgendado
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas credenciais do Supabase:
```env
VITE_SUPABASE_URL=sua_url_do_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
```

4. **Execute as migrações do banco de dados**
```bash
# Se estiver usando Supabase CLI
supabase db push
```

5. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:8080`

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── auth/           # Componentes de autenticação
│   ├── customer/       # Componentes para clientes
│   ├── dashboard/      # Componentes do dashboard
│   ├── layout/         # Componentes de layout
│   ├── store-admin/    # Componentes de administração
│   └── ui/             # Componentes UI (shadcn/ui)
├── contexts/           # Contextos React
├── data/              # Dados iniciais e configurações
├── hooks/             # Custom hooks
├── integrations/      # Integrações externas (Supabase)
├── lib/               # Utilitários e configurações
├── pages/             # Páginas da aplicação
└── assets/            # Imagens e recursos estáticos
```

## 🔒 Segurança

O projeto implementa várias camadas de segurança:

- **Row Level Security (RLS)** no Supabase
- **Validação de entrada** com Zod
- **Autenticação JWT** via Supabase
- **Controle de acesso** baseado em roles
- **Sanitização de dados** em formulários

> 📋 **Relatório de Segurança**: Um relatório detalhado de auditoria de segurança está disponível em `security-report.md`

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Netlify
1. Conecte seu repositório ao Netlify
2. Configure as variáveis de ambiente
3. Build command: `npm run build`
4. Publish directory: `dist`

## 📊 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run build:dev` - Gera build de desenvolvimento
- `npm run lint` - Executa o linter
- `npm run preview` - Preview do build de produção

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Para suporte e dúvidas:
- 📧 Email: suporte@staragendado.com
- 💬 Discord: [StarAgendado Community](https://discord.gg/staragendado)
- 📖 Documentação: [docs.staragendado.com](https://docs.staragendado.com)

---

**Desenvolvido com ❤️ pela equipe StarAgendado**