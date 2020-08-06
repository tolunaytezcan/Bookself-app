const categories = [
  "CSS",
  "Java",
  "JavaScript",
  "HTML",
  "Python",
  "React",
  "Bootstrap",
  "C#",
];
//Kategorileri eklediğim zaman anasayfamda sıralı gelmesini istiyorum.
//Başka bir array'e map dönüp sıraladım.
//Böylelikle categories'e ne eklersem ekleyeyim dinamik olarak anasayfama sıralı gelecek.
export const categoriesSort = categories.map((c) => c).sort();
export const ratings = [ 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
export const statuses = ["Not read", "Read"];
export const apiHost = "https://5ebc205ff2cfeb001697d6bf.mockapi.io";

//ilk hali
//export const categories = ["CSS", "Java", "JavaScript", "HTML", "Python", "React"];
