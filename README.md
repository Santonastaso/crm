# Atomic CRM

A full-featured CRM built with React, shadcn-admin-kit, and Supabase.

## 🚀 Live Demo

Visit the live application: [https://santonastaso.github.io/crm/](https://santonastaso.github.io/crm/)

## ✨ Features

- 📇 **Organize Contacts**: Keep all your contacts in one easily accessible place
- ⏰ **Create Tasks & Set Reminders**: Never miss a follow-up or deadline
- 📝 **Take Notes**: Capture important details and insights effortlessly
- ✉️ **Capture Emails**: CC Atomic CRM to automatically save communications as notes
- 📊 **Manage Deals**: Visualize and track your sales pipeline in a Kanban board
- 🔄 **Import & Export Data**: Easily transfer contacts in and out of the system
- 🔐 **Control Access**: Log in with Google, Azure, Keycloak, and Auth0
- 📜 **Track Activity History**: View all interactions in aggregated activity logs
- 🔗 **Integrate via API**: Connect seamlessly with other systems using our API
- 🛠️ **Customize Everything**: Add custom fields, change the theme, and replace any component to fit your needs

## 🛠️ Technology Stack

- **Frontend**: React 19, TypeScript, Vite
- **UI Components**: shadcn/ui, Radix UI
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Styling**: Tailwind CSS
- **State Management**: TanStack Query
- **Forms**: React Hook Form with Zod validation

## 📦 Installation

### Prerequisites

- Node.js 22 LTS
- npm or yarn
- Supabase account

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Santonastaso/crm.git
   cd crm
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.development.example .env.development
   ```
   
   Update `.env.development` with your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_IS_DEMO=false
   ```

4. **Set up the database**
   - Go to your Supabase project dashboard
   - Navigate to SQL Editor
   - Run the contents of `setup_database.sql`
   - Run the contents of `fix_views_and_permissions.sql`

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173` and create your first user account.

## 🗄️ Database Setup

The application includes comprehensive SQL scripts for database setup:

- `setup_database.sql` - Creates all tables, views, functions, and policies
- `fix_views_and_permissions.sql` - Fixes permissions for proper access

## 🚀 Deployment

### GitHub Pages (Automatic)

This repository is configured for automatic deployment to GitHub Pages:

1. **Push to main branch** - The GitHub Action will automatically build and deploy
2. **Access your app** at `https://santonastaso.github.io/crm/`

### Manual Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting provider

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_SUPABASE_URL` | Your Supabase project URL | Yes |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anonymous key | Yes |
| `VITE_IS_DEMO` | Set to `false` for production | Yes |

### Supabase Setup

1. Create a new Supabase project
2. Run the database setup scripts
3. Configure authentication settings
4. Set up storage bucket for attachments

## 📚 Documentation

- [User Management](./doc/user/user-management.md)
- [Importing And Exporting Data](./doc/user/import-contacts.md)
- [Inbound Email](./doc/user/inbound-email.md)
- [Customizing the CRM](./doc/developer/customizing.md)
- [Deployment Guide](./doc/developer/deploy.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details.

## 🙏 Acknowledgments

- Built with [Atomic CRM](https://github.com/marmelab/atomic-crm) by Marmelab
- UI components by [shadcn/ui](https://ui.shadcn.com/)
- Backend powered by [Supabase](https://supabase.com/)

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Made with ❤️ by [Andrea Santonastaso](https://github.com/Santonastaso)**