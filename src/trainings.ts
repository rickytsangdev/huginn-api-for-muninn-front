interface Training {
  id: number;
  title: string;
  description: string;
  coach: string;
  price: number;
  picture: string;
  location: string;
  createdAt: string;
  duration: string;
  level: "Débutant" | "Intermédiaire" | "Avancé";
  format: "vidéo à la demande" | "Présentiel" | "masterclass" | "live";
  rating: number;
  tags?: string[];
}

export const trainings: Training[] = [
  {
    id: 1,
    title: "Coaching en développement personnel",
    description:
      "Séances de coaching individuel pour vous aider à atteindre vos objectifs personnels et professionnels.",
    coach: "coach.expert@gmail.com",
    price: 2000,
    picture:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    location: "En ligne",
    createdAt: "2024-11-01T09:00:00.000Z",
    duration: "2 heures",
    level: "Débutant",
    format: "vidéo à la demande",
    rating: 3,
  },
  {
    id: 2,
    title: "Formation en gestion du stress",
    description:
      "Programme complet pour apprendre à mieux gérer le stress et améliorer votre bien-être au quotidien.",
    coach: "formation.stress@gmail.com",
    price: 850,
    picture:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    location: "En ligne",
    createdAt: "2024-11-01T09:00:00.000Z",
    duration: "10 heures",
    level: "Intermédiaire",
    format: "Présentiel",
    rating: 4,
  },
  {
    id: 3,
    title: "Atelier sur la confiance en soi",
    description:
      "Atelier interactif pour renforcer votre estime de soi et booster votre confiance au quotidien.",
    coach: "atelier.confiance@gmail.com",
    price: 900,
    picture:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    location: "En ligne",
    createdAt: "2024-11-01T09:00:00.000Z",
    duration: "3 heures",
    level: "Intermédiaire",
    format: "live",
    rating: 3.5,
  },
  {
    id: 4,
    title: "Cours en ligne : Leadership et communication",
    description:
      "Apprenez à devenir un leader inspirant et à améliorer vos compétences en communication.",
    coach: "leader.coach@gmail.com",
    price: 2500,
    picture:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
    location: "En présentiel",
    createdAt: "2024-11-01T09:00:00.000Z",
    duration: "13 heures",
    level: "Intermédiaire",
    format: "Présentiel",
    rating: 4,
  },
  {
    id: 5,
    title: "Formation : Gestion du temps efficace",
    description:
      "Apprenez à organiser vos journées pour maximiser votre productivité sans stress.",
    coach: "coach.time@gmail.com",
    price: 180,
    picture:
      "https://images.unsplash.com/photo-1515165562835-c4c3b06c2b40?auto=format&fit=crop&w=800&q=80",
    location: "En ligne",
    createdAt: "2025-03-10T09:00:00.000Z",
    duration: "3 heures",
    level: "Intermédiaire",
    format: "masterclass",
    rating: 4.8,
    tags: ["productivité", "organisation", "gestion du emps"],
  },
];
