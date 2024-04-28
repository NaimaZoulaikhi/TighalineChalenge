import PushNotification from 'react-native-push-notification';
import BackgroundTask from 'react-native-background-task';

class NotificationService {
  configure = () => {
    PushNotification.configure({
      onNotification: (notification) => {
        console.log('NOTIFICATION:', notification);

        if (!notification.data.fromForeground) {
          // Afficher une notification à l'utilisateur
          PushNotification.localNotification({
            channelId: 'orders-channel',
            title: 'Nouvelle commande',
            message: 'Une nouvelle commande vient d être ajoutée.',
            soundName: 'default',
            playSound: true,
          });
        }
      },
    });
  };

  unregister = () => {
    PushNotification.unregister();
  };

  checkNewOrders = async () => {
      try {
        const response = await fetch('https://tighaline.ma/api/orders');
        const data = await response.json();

        // Vérifier si de nouvelles commandes ont été ajoutées
        const newOrders = data.filter((order) => !order.read);

        if (newOrders.length > 0) {
          // Afficher une notification pour chaque nouvelle commande
          newOrders.forEach((order) => {
            PushNotification.localNotification({
              channelId: 'orders-channel',
              title: 'Nouvelle commande',
              message: `Commande #${order.id} ajoutée.`,
              soundName: 'default',
              playSound: true,
            });
          });
        }
      } catch (error) {
        console.error('Error checking new orders:', error);
      }
    };

    // Configurer la tâche d'arrière-plan
    configureBackgroundTask = () => {
      BackgroundTask.define(() => {
        this.checkNewOrders();
        BackgroundTask.finish();
      });

      BackgroundTask.schedule({
        period: 60 * 15, // Vérifier toutes les 15 minutes
      });
    };

}

export const notificationService = new NotificationService();