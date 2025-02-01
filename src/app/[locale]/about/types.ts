interface Feature {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>; // Componente de ícone do React
}

export interface AboutViewProps {
  title: string;
  description: string;
  postDescription: string;
  features: Feature[];
  image?: boolean;
}
