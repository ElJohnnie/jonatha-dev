interface Feature {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>; // Componente de ícone do React
}

export interface AboutProps {
  title: string;
  description: string;
  postDescription: string;
  features: Feature[];
  image?: boolean;
}
