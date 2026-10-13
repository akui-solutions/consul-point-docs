import React from 'react';
import {
  AddressBookIcon,
  ArrowRightIcon,
  BellIcon,
  BooksIcon,
  BuildingOfficeIcon,
  CaretDownIcon,
  ChartLineIcon,
  ChatsCircleIcon,
  GearIcon,
  SquaresFourIcon,
  StorefrontIcon,
  TranslateIcon,
  TrayIcon,
  UserCircleIcon,
  type Icon as PhosphorIcon,
} from '@phosphor-icons/react';

/**
 * Iconos de los módulos, iguales a los de la plataforma: los mismos componentes de
 * Phosphor (peso "light") que usa consul-point-fe en el menú lateral y la barra superior.
 */

type CustomIconProps = { size: number; className?: string };

/** Copia de src/icons/SidebarIcons/ArticleIcon.tsx de consul-point-fe. */
function ArticlesIcon({ size, className }: CustomIconProps): React.JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1"
      stroke="currentColor"
      width={size}
      height={size}
      aria-hidden="true"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
      />
    </svg>
  );
}

/** Copia de src/icons/SidebarIcons/StudioIcon.tsx de consul-point-fe. */
function StudioIcon({ size, className }: CustomIconProps): React.JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M9 9 L9 4 L15 4 L15 9 L19 16 C19.5 17 19 18 18 18 L6 18 C5 18 4.5 17 5 16 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <rect x="10.5" y="2" width="3" height="2" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M7 14 L17 14 C17.5 15 17 16 16 16 L8 16 C7 16 6.5 15 7 14 Z" fill="currentColor" opacity="0.2" />
      <path d="M8 15 L10 13 L12 15 L14 13 L16 15" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <circle cx="10" cy="14.5" r="0.3" fill="currentColor" opacity="0.7" />
      <circle cx="14" cy="14.5" r="0.3" fill="currentColor" opacity="0.7" />
      <circle cx="10" cy="3" r="0.5" fill="currentColor" opacity="0.4" />
      <circle cx="12" cy="2.5" r="0.3" fill="currentColor" opacity="0.3" />
      <circle cx="14" cy="3" r="0.4" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

const PHOSPHOR_ICONS = {
  // Menú lateral (src/components/LayoutComponents/Sidebar/data/navItems.tsx)
  dashboard: SquaresFourIcon,
  chat: ChatsCircleIcon,
  knowledge: BooksIcon,
  contacts: AddressBookIcon,
  store: StorefrontIcon,
  reports: ChartLineIcon,
  settings: GearIcon,
  // Barra superior (src/components/LayoutComponents/Navbar)
  inbox: TrayIcon,
  workspaces: BuildingOfficeIcon,
  notifications: BellIcon,
  language: TranslateIcon,
  user: UserCircleIcon,
  // Interfaz de la documentación
  arrowRight: ArrowRightIcon,
  caretDown: CaretDownIcon,
} satisfies Record<string, PhosphorIcon>;

const CUSTOM_ICONS = {
  articles: ArticlesIcon,
  studio: StudioIcon,
};

export type IconName = keyof typeof PHOSPHOR_ICONS | keyof typeof CUSTOM_ICONS;

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

export function Icon({ name, size = 20, className }: IconProps): React.JSX.Element {
  if (name in CUSTOM_ICONS) {
    const Custom = CUSTOM_ICONS[name as keyof typeof CUSTOM_ICONS];
    return <Custom size={size} className={className} />;
  }
  const Phosphor = PHOSPHOR_ICONS[name as keyof typeof PHOSPHOR_ICONS];
  return <Phosphor size={size} weight="light" aria-hidden="true" className={className} />;
}

export default Icon;
