import errorImage from '../../img/no_results_found.png';

export default function NotFound() {
  return (
    <div>
      <img src={errorImage} width="450" alt="error"></img>
    </div>
  );
}