import Image from 'next/image';
import classes from './post-header.module.css';

function PostHeader(props) {
  const { title, image } = props;

  return (
    <heade className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </heade>
  );
}

export default PostHeader;
