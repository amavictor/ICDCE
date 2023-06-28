import {Card} from "./TextCard.styles";

export const TextCrad = ({image,title,description}) => {
  return(
      <Card>
          <img
            src={image}
            alt={"icon"}
          />
          <h5>{title}</h5>
          <p>{description}</p>
      </Card>
  )
}