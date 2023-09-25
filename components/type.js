import { useEffect, useState } from 'react';

const Type = () => {
  const [text, setText] = useState('');
  const phrases = ["Dynamics 365", "Streamline your", "Global Businesses"];
  const typingSpeed = 200;
  const backspaceSpeed = 40;

  useEffect(() => {
    let currentPhraseIndex = 0;
    let currentCharacterIndex = 0;
    let isDeleting = false;

    const typeText = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      const currentText = currentPhrase.substring(0, currentCharacterIndex);

      setText(currentText);

      if (!isDeleting && currentCharacterIndex === currentPhrase.length) {
        // Start backspacing
        isDeleting = true;
        setTimeout(typeText, backspaceSpeed);
      } else if (isDeleting && currentCharacterIndex === 0) {
        // Move to the next phrase
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setTimeout(typeText, typingSpeed);
      } else {
        // Continue typing or backspacing
        const speed = isDeleting ? backspaceSpeed : typingSpeed;
        setTimeout(typeText, speed);
      }

      if (!isDeleting) {
        currentCharacterIndex++;
      } else {
        currentCharacterIndex--;
      }
    };

    setTimeout(typeText, typingSpeed);

    return () => {
      clearTimeout(typeText);
    };
  }, []);

  return (
    <div className="type_asd">
      <div className="text-ee">
        <div className="iam"></div>
        <div className="typingText">{text}</div>
      </div>
    </div>
  );
};

export default Type;
