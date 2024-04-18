import React from "react";

const ProjectDatas = {
  turkish: [
    {
      title: "Film Listesi",
      description:
        "Bu projede, sizi ilgilendiren filmi detaylı olarak görebilir, değiştirmek istediğiniz bilgileri değiştirebilir ve yeni bir film ekleyebilirsiniz. Ayrıca, favori filmlerinizi favoriler listesine ekleyebilirsiniz. Bileşenler arasındaki veri aktarımı Redux kütüphanesi kullanılarak gerçekleştirilmiştir.",
      link: "Siteyi Görüntüle",
    },
    {
      title: "Alışveriş Sepeti",
      description:
        "Bu projede, eklenen ürünleri yerel depolamada tutmak için React'in useContext kancası kullanılarak bir alışveriş sepeti özelliği geliştirildi. Ayrıca, kullanıcılar sepetten istenmeyen ürünleri kaldırabilir ve kullanıcı arayüzü CSS stili bileşenleri kullanılarak tasarlandı.",
    },
    {
      title: "Pizza Siparişi",
      description:
        "Bu, kullanıcıların ana sayfa ve belirli pizza sipariş rotaları aracılığıyla pizza siparişi vermelerine izin veren bir ön uç projesidir. Ana sayfa ayrıca çeşitli restoran ve mutfak seçenekleri sunar. Pizza sipariş formu, React-hook-form kullanılarak uygulanmış ve uygulama, Tailwind CSS kullanılarak duyarlı bir şekilde tasarlanmıştır.",
    },
    {
      header: "Projelerim",
    },
  ],
  english: [
    {
      title: "Movie Watchlist",
      description:
        "In this project, you can view the details of the movie that interests you, modify the information you want to change, and add a new movie. Additionally, you can add your favorite movies to the favorites list. The data transfer between components is implemented using the Redux library.",
      link: "View Site",
    },
    {
      title: "Shopping Cart",
      description:
        "In this project, a shopping cart feature was developed using React's useContext hook to persist added products in local storage. Additionally, users are able to remove unwanted products from the cart, and the user interface was designed using CSS styled components.",
    },
    {
      title: "Pizza Project",
      description:
        "This is a front-end project that allows users to order pizza through a home page and specific pizza order routes. The homepage also offers various restaurant and kitchen options. The pizza order form is implemented using React-hook-form, and the application is designed responsively using Tailwind CSS.",
    },
    {
      header: "Projects",
    },
  ],
};

export default ProjectDatas;
