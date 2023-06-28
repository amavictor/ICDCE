import {CarouselContainer} from "./Carousel.styles";

export const Carousel = ({image,comment,name}) => {
    return (
      <CarouselContainer>
          <img
            src={image}
            alt={"carousel Image"}
          />
          <p>
              {
                  comment
              }
          </p>
          <em>
              {
                  name
              }
          </em>
      </CarouselContainer>
    )
}