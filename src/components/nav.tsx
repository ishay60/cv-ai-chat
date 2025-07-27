'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bot, FolderGit2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const links = [
  { href: '/', label: 'CV Chatbot', icon: Bot },
  { href: '/projects', label: 'Projects', icon: FolderGit2 },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="bg-card/50 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-2">
            <span>Ishay Rosengarten</span>
          </Link>
          <div className="flex items-center gap-4">
            {links.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    'flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span className="hidden sm:inline">{label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
