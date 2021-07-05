import '../styles/sidebar.scss';
import { Button } from '../components/Button';


interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SelectedGender{
  id:number
}

interface SideBarProps {
  SeletedGender: SelectedGender;
  GenreResponseProps:Array<GenreResponseProps>;
  HandleClickButton: Function;
}

export function SideBar(props:SideBarProps) {


return (

  <nav className="sidebar">
  <span>Watch<p>Me</p></span>

  <div className="buttons-container">
    {props.GenreResponseProps.map(genre => (
      <Button
        key={String(genre.id)}
        title={genre.title}
        iconName={genre.name}
        onClick={() => props.HandleClickButton(genre.id)}
        selected={props.SeletedGender.id === genre.id}
      />
    ))}
  </div>
</nav>)}