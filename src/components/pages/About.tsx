import { LogProps } from '../../types';

const About = ({ log }: LogProps) => {
  log('Hello from', 'About component');

  return (
    <>
      <h1>About</h1>
      <p>
        This is a interview task for Ananas.com
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        perspiciatis error iste dolorem aliquid dicta at velit praesentium, sunt
        necessitatibus vitae eveniet minima magni commodi ut reiciendis debitis
        voluptatibus explicabo blanditiis obcaecati delectus soluta sint!
        Placeat, possimus. Corporis praesentium nesciunt, atque eaque ad
        deleniti. Dolorem modi doloremque voluptatem nisi recusandae nemo
        dolorum omnis iste debitis numquam? Corrupti cupiditate doloremque
        possimus! Cupiditate, tempora exercitationem mollitia non molestiae
        reprehenderit similique deleniti consectetur, maiores reiciendis quod
        expedita. Quo, excepturi totam ratione quos maxime autem voluptas fuga
        nisi hic minus dolorum quia tenetur. Dolores cum dolorem praesentium
        ullam illum vero iste aperiam id deleniti ad animi esse qui sunt
        corrupti tenetur, tempora omnis necessitatibus iure incidunt! Laboriosam
        error, sunt minus officia assumenda aliquam? At.
      </p>
    </>
  );
};

export default About;
