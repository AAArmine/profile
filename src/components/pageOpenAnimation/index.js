import './index.scss';

const PageOpenAnimation = () => {
  const text = 'Armine Aghababyan * Front-End-Developer * ';
  const textArray = text.split('');
  return (
    <div className="circle-cont">
      <div className="circle">
        <div className="logo">
          <div className="text">
            <p>
              {textArray.map((letter, i) => (
                <span
                  style={{
                    transform: `rotate(${i * 8.6}deg)`,
                    ...(i < 7 && {
                      color: 'red',
                      fontSize: '15px',
                      fontWeight: '900',
                    }),
                  }}
                >
                  {letter}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageOpenAnimation;
