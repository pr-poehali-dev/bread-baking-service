import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Пекарня</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors">Продукция</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button size="sm" className="hidden md:inline-flex">
            <Icon name="Phone" size={16} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </header>

      <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-accent/20 -z-10" />
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                Свежая выпечка<br />
                <span className="text-primary">каждый день</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Традиционные рецепты, натуральные ингредиенты и забота о качестве в каждом изделии
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="ShoppingBag" size={20} className="mr-2" />
                  Каталог
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="MapPin" size={20} className="mr-2" />
                  Где купить
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/6c7e8293-b930-4a5e-8e41-8b8d836dc740/files/e4cd0fa7-1e90-4be0-8c14-63d16fcd0eee.jpg"
                alt="Свежая выпечка"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Award" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Более 15 лет</p>
                    <p className="text-sm text-muted-foreground">опыта работы</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Наша продукция</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ароматная выпечка из лучших ингредиентов
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/projects/6c7e8293-b930-4a5e-8e41-8b8d836dc740/files/e4cd0fa7-1e90-4be0-8c14-63d16fcd0eee.jpg"
                    alt="Хлеб"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Wheat" size={24} className="text-primary" />
                    <h3 className="text-xl font-bold text-foreground">Хлеб</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Традиционный хлеб на закваске из отборной муки
                  </p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/projects/6c7e8293-b930-4a5e-8e41-8b8d836dc740/files/4f01489a-3653-43e6-b6e8-fb2b91d6f3be.jpg"
                    alt="Выпечка"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Croissant" size={24} className="text-primary" />
                    <h3 className="text-xl font-bold text-foreground">Выпечка</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Круассаны, булочки и слоеные изделия
                  </p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/projects/6c7e8293-b930-4a5e-8e41-8b8d836dc740/files/92566d81-da8c-4c47-a1e8-a71d9f8c89c1.jpg"
                    alt="Торты"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Cake" size={24} className="text-primary" />
                    <h3 className="text-xl font-bold text-foreground">Торты</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Авторские торты и кондитерские изделия
                  </p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/6c7e8293-b930-4a5e-8e41-8b8d836dc740/files/92566d81-da8c-4c47-a1e8-a71d9f8c89c1.jpg"
                alt="О нас"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">О нашей пекарне</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Мы создаем хлебобулочные изделия по традиционным рецептам, используя только натуральные ингредиенты. 
                Наши пекари работают с душой, чтобы каждое изделие получилось идеальным.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">100% натуральные ингредиенты</h3>
                    <p className="text-muted-foreground">Без консервантов и искусственных добавок</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Свежая выпечка ежедневно</h3>
                    <p className="text-muted-foreground">Печем каждое утро для наших клиентов</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Heart" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">С любовью к делу</h3>
                    <p className="text-muted-foreground">Каждое изделие создается с душой</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы всегда рады ответить на ваши вопросы
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Пекарская, д. 15</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground">info@bakery.ru</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Время работы</h3>
                    <p className="text-muted-foreground">Пн-Вс: 7:00 - 21:00</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Написать нам</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Телефон</label>
                  <Input type="tel" placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Сообщение</label>
                  <Textarea placeholder="Ваше сообщение..." rows={4} />
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Пекарня</h3>
              <p className="text-gray-300">
                Традиционная выпечка с 2008 года
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-primary transition-colors">Главная</a></li>
                <li><a href="#products" className="text-gray-300 hover:text-primary transition-colors">Продукция</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-300">
                <li>г. Москва, ул. Пекарская, 15</li>
                <li>+7 (495) 123-45-67</li>
                <li>info@bakery.ru</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Пекарня. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
