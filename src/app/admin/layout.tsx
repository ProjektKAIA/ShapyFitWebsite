// /workspaces/claude-workspace/shapyfit/src/app/admin/layout.tsx
import { AuthProvider } from '@/contexts/AuthContext';

export const metadata = {
  title: 'Admin | ShapyFit',
  robots: 'noindex, nofollow',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}
