
import { Tv2, CreditCard, Smartphone, Laptop, MonitorPlay, Download, Video, Film, Play, Monitor, Tv, Calendar, Tablet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const { data: subscriptions, isLoading } = useQuery({
    queryKey: ['subscriptions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('subscriptions')
        .select('*');
      
      if (error) throw error;
      return data;
    }
  });

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Bonjour, je souhaite bénéficier d'un essai gratuit de 24h pour vérifier la stabilité du service IPTV avant l'achat.");
    const whatsappUrl = `https://wa.me/+221769661503?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstallClick = () => {
    window.open('https://www.iptvsmarters.com/', '_blank');
  };

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigate("/auth");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: error.message,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-end mb-8">
          <Button
            variant="outline"
            className="border-blue-500 text-blue-500 hover:bg-blue-500/10"
            onClick={handleLogout}
          >
            Déconnexion
          </Button>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Votre Solution IPTV Premium
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Accédez à des milliers de chaînes du monde entier avec notre service IPTV fiable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={handleWhatsAppClick}
            >
              Essai Gratuit 24h
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-blue-500 text-blue-500 hover:bg-blue-500/10"
              onClick={handleInstallClick}
            >
              <Download className="mr-2" />
              Installation IPTV
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {isLoading ? (
            <div className="col-span-3 text-center">Chargement des forfaits...</div>
          ) : subscriptions?.map((subscription) => (
            <div key={subscription.id} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{subscription.plan_name}</h3>
              <p className="text-2xl font-bold text-blue-400 mb-4">{subscription.price}€ / {subscription.duration} mois</p>
              <ul className="space-y-2">
                {subscription.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Play className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700"
                onClick={handleWhatsAppClick}
              >
                Souscrire
              </Button>
            </div>
          ))}
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
      </div>
    </div>
  );
};

export default Index;
