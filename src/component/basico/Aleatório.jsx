export default (props) => {
  const { min, max } = props;
  const aleatorio = parseInt(Math.random() * (max - min)) + min;

  return (
    <>
      <h2>Nùmero aleatório</h2>
      <p>
        <strong>O número minimo é:</strong> {min}
      </p>
      <p>
        <strong>O número máximo é:</strong> {max}
      </p>
      <p>
        <strong>O número aleatório é:</strong> {aleatorio}
      </p>
    </>
  );
};
