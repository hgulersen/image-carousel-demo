import ImageCarousel from "./components/ImageCarousel";

const IMAGE_URLS = [
  "https://picsum.photos/id/237/200/300",
  "https://picsum.photos/id/236/200/300",
  "https://picsum.photos/id/235/200/300",
];

export default function App() {
  return <ImageCarousel imageSrcs={IMAGE_URLS} />;
}
