import { useState } from "react";
import img1 from "../assets/img/blog/blog-post-1.jpg";
import img2 from "../assets/img/blog/blog-post-2.jpg";
import img3 from "../assets/img/blog/blog-post-3.jpg";
import img4 from "../assets/img/blog/blog-post-4.jpg";
import img5 from "../assets/img/blog/blog-post-5.jpg";
import img6 from "../assets/img/blog/blog-post-6.jpg";

const AllBlogData = () => {
  const blogsData = [
    {
      id: 1,
      img: img1,
      title: "Best Web developer in Pakistan",
      commentor: "Rio ",
      date: "21 April 2022",
      tag: `wordpress, business, economy, web, web development,  design`,
      description1:
        "In today's digital age, a well-crafted online presence is essential for businesses and individuals alike. From e-commerce stores to corporate websites, the demand for skilled web developers has surged dramatically. Pakistan, with its burgeoning tech scene, has become a hub for some of the best web developers in the world. In this blog, we'll introduce you to the crème de la crème of web developers in Pakistan",
      description2:
        "In today's digital age, a well-crafted online presence is essential for businesses and individuals alike. From e-commerce stores to corporate websites, the demand for skilled web developers has surged dramatically. Pakistan, with its burgeoning tech scene, has become a hub for some of the best web developers in the world. In this blog, we'll introduce you to the crème de la crème of web developers in Pakistan",
      description3:
        "In today's digital age, a well-crafted online presence is essential for businesses and individuals alike. From e-commerce stores to corporate websites, the demand for skilled web developers has surged dramatically. Pakistan, with its burgeoning tech scene, has become a hub for some of the best web developers in the world. In this blog, we'll introduce you to the crème de la crème of web developers in Pakistan",
      description4:
        "In today's digital age, a well-crafted online presence is essential for businesses and individuals alike. From e-commerce stores to corporate websites, the demand for skilled web developers has surged dramatically. Pakistan, with its burgeoning tech scene, has become a hub for some of the best web developers in the world. In this blog, we'll introduce you to the crème de la crème of web developers in Pakistan",
    },
    {
      id: 2,
      img: img2,
      title: "How to become best web developer",
      commentor: "Santhan ",
      date: "14 January 2022",
      tag: `wordpress, business, economy, design`,
      description1:
        "Becoming the best web developer takes a combination of technical skills, continuous learning, creativity, and a strong work ethic",
      description2:
        "Becoming the best web developer takes a combination of technical skills, continuous learning, creativity, and a strong work ethic",
      description3:
        "Becoming the best web developer takes a combination of technical skills, continuous learning, creativity, and a strong work ethic",
      description4:
        "Becoming the best web developer takes a combination of technical skills, continuous learning, creativity, and a strong work ethic",
    },
    
  ];

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  return {
    singleData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
  };
};

export default AllBlogData;
