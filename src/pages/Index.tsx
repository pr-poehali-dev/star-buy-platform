import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const [username, setUsername] = useState('');
  const [starsAmount, setStarsAmount] = useState('');
  const { toast } = useToast();

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "✨ Заказ принят!",
      description: `${starsAmount} звёзд для @${username} в обработке`,
    });
  };

  const handleFakeLink = (e: React.MouseEvent) => {
    e.preventDefault();
    toast({
      title: "🔒 Секретный доступ",
      description: "Эта функция доступна только для премиум-партнёров",
      variant: "default",
    });
  };

  const packages = [
    { stars: 100, price: '99₽', popular: false },
    { stars: 500, price: '449₽', popular: true },
    { stars: 1000, price: '849₽', popular: false },
    { stars: 5000, price: '3999₽', popular: false },
  ];

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/89b704f7-2aad-4cfd-8feb-c08bfbff5851/files/481daa7d-2d67-49cf-9802-5baf253da094.jpg)' }}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-yellow-900/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,193,7,0.1),transparent_50%)]"></div>

      <div className="w-full max-w-5xl relative z-10 animate-fade-in">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="relative">
              <Icon name="Star" className="w-16 h-16 text-accent fill-accent animate-glow" />
              <Icon name="Sparkles" className="w-8 h-8 text-primary absolute -top-2 -right-2" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_30px_rgba(255,215,0,0.5)]">
            Telegram Stars
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            Премиальная валюта для вашего Telegram
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="shadow-2xl shadow-yellow-900/50 border-2 border-yellow-600/50 hover:shadow-yellow-500/40 hover:border-yellow-500 transition-all duration-300 bg-gradient-to-br from-black/90 to-neutral-900/90 backdrop-blur-sm">
            <CardHeader className="space-y-2">
              <div className="flex items-center gap-2">
                <Icon name="Zap" className="w-6 h-6 text-primary" />
                <CardTitle className="text-2xl">Быстрая покупка</CardTitle>
              </div>
              <CardDescription className="text-base">
                Мгновенное пополнение звёзд Telegram
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePurchase} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-base font-semibold flex items-center gap-2">
                    <Icon name="User" className="w-4 h-4" />
                    Ваш никнейм в Telegram
                  </Label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">@</span>
                    <Input
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="username"
                      className="pl-8 h-12 text-base border-2 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="stars" className="text-base font-semibold flex items-center gap-2">
                    <Icon name="Star" className="w-4 h-4 fill-accent text-accent" />
                    Количество звёзд
                  </Label>
                  <Input
                    id="stars"
                    type="number"
                    min="1"
                    value={starsAmount}
                    onChange={(e) => setStarsAmount(e.target.value)}
                    placeholder="100"
                    className="h-12 text-base border-2 focus:border-primary transition-colors"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-14 text-lg font-bold bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 hover:from-yellow-500 hover:via-yellow-300 hover:to-yellow-500 transition-all duration-500 shadow-2xl shadow-yellow-500/60 hover:shadow-yellow-400/80 text-black animate-shimmer bg-[length:200%_100%]"
                >
                  <Icon name="ShoppingCart" className="w-5 h-5 mr-2" />
                  Купить звёзды
                </Button>

                <div className="text-center pt-4 border-t">
                  <button
                    onClick={handleFakeLink}
                    className="text-sm text-primary/70 hover:text-primary underline decoration-dotted underline-offset-4 transition-colors cursor-not-allowed"
                  >
                    🎭 Эксклюзивный доступ к VIP-тарифам
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card className="shadow-2xl shadow-yellow-900/50 border-2 border-yellow-600/50 bg-gradient-to-br from-black/90 to-neutral-900/90 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Icon name="Gift" className="w-6 h-6 text-accent" />
                  <CardTitle className="text-xl">Популярные пакеты</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {packages.map((pkg, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer hover:scale-105 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-yellow-600/20 via-yellow-500/10 to-amber-600/20 border-yellow-500 shadow-lg shadow-yellow-500/30'
                        : 'bg-gradient-to-r from-neutral-900/50 to-neutral-800/50 hover:from-neutral-800/60 hover:to-neutral-700/60 border-yellow-600/30'
                    }`}
                    onClick={() => setStarsAmount(pkg.stars.toString())}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <Icon name="Star" className={`w-6 h-6 ${pkg.popular ? 'fill-accent text-accent' : 'fill-muted text-muted-foreground'}`} />
                        <div>
                          <div className="font-bold text-lg">{pkg.stars} звёзд</div>
                          {pkg.popular && (
                            <div className="text-xs text-primary font-semibold">🔥 Самый популярный</div>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-xl text-primary">{pkg.price}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-2xl shadow-yellow-900/50 border-2 border-yellow-600/50 bg-gradient-to-br from-black/90 to-neutral-900/90 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Shield" className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Безопасная оплата</div>
                      <div className="text-sm text-muted-foreground">Защищённые транзакции</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Zap" className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Мгновенная доставка</div>
                      <div className="text-sm text-muted-foreground">Звёзды приходят за секунды</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Headphones" className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Поддержка 24/7</div>
                      <div className="text-sm text-muted-foreground">Всегда на связи</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            <Icon name="Lock" className="w-4 h-4" />
            Безопасно и надёжно • Официальный партнёр Telegram
          </p>
        </div>
      </div>
    </div>
  );
}