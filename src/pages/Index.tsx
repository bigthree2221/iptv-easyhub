import { Tv2, CreditCard, Smartphone, Laptop, MonitorPlay } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Bonjour, je souhaite bénéficier d'un essai gratuit de 24h pour vérifier la stabilité du service IPTV avant l'achat.");
    const whatsappUrl = `https://wa.me/+33600000000?text=${message}`; // Remplacez par votre numéro WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  const blogPosts = [
    {
      title: "Les Avantages de l'IPTV",
      description: "Découvrez pourquoi l'IPTV révolutionne la façon dont nous regardons la télévision",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      tag: "Guide"
    },
    {
      title: "Guide d'Installation Complet",
      description: "Comment configurer votre service IPTV sur tous vos appareils en quelques étapes simples",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      tag: "Tutorial"
    },
    {
      title: "IPTV pour Toute la Famille",
      description: "Comment l'IPTV peut satisfaire les besoins de divertissement de toute la famille",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
      tag: "Lifestyle"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Votre Solution IPTV Premium
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Accédez à des milliers de chaînes du monde entier avec notre service IPTV fiable
          </p>
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
            onClick={handleWhatsAppClick}
          >
            Essai Gratuit 24h
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl">
            <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
              <Tv2 className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Chaînes TV en Direct</h3>
            <p className="text-gray-400">Regardez vos chaînes préférées en qualité HD</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl">
            <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
              <CreditCard className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Forfaits Flexibles</h3>
            <p className="text-gray-400">Choisissez le forfait parfait pour vos besoins</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl">
            <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
              <MonitorPlay className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Contenu à la Demande</h3>
            <p className="text-gray-400">Accédez à une vaste bibliothèque de films et séries</p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8">Appareils Compatibles</h2>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <Smartphone className="w-8 h-8 text-blue-500" />
              <span>Mobile</span>
            </div>
            <div className="flex items-center gap-2">
              <Laptop className="w-8 h-8 text-blue-500" />
              <span>Ordinateur</span>
            </div>
            <div className="flex items-center gap-2">
              <Tv2 className="w-8 h-8 text-blue-500" />
              <span>Smart TV</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Blog & Ressources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden transition-transform hover:scale-105">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-sm text-blue-500 bg-blue-500/10 rounded-full mb-4">
                    {post.tag}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-400">{post.description}</p>
                  <Button 
                    variant="link" 
                    className="text-blue-400 hover:text-blue-300 p-0 mt-4"
                  >
                    Lire la suite →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
