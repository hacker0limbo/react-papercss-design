import React from 'react';
import { Image } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <p>
      <Image src="https://unsplash.it/200" alt="Smaller Unsplash" float="left" /> Lorem ipsum dolor
      sit amet, consectetur adipiscing elit. Curabitur non elit sed lorem vulputate consectetur sed
      vel orci. Nunc orci metus, hendrerit viverra diam a, viverra efficitur nisi. Suspendisse ante
      sapien, porta vitae augue et, pulvinar posuere nibh. Suspendisse id commodo sem, vestibulum
      malesuada erat. Duis luctus est sit amet nisl maximus porta. Curabitur tempor nisi tincidunt
      ultricies rutrum. Nam finibus turpis ut nibh dignissim, in tincidunt mauris suscipit.
      Curabitur sollicitudin mi quis orci semper, nec egestas nibh mollis. Aenean pellentesque
      lectus rutrum, ultrices felis malesuada, finibus purus. Morbi eleifend pellentesque justo,
      quis vestibulum mi. Donec porta ipsum tellus, ac scelerisque lectus pellentesque eget. Etiam
      quis rutrum dui. Nulla facilisi. Donec imperdiet mattis mi nec fringilla. Donec mollis augue
      sed viverra placerat. Donec varius, sem sed porttitor euismod, est nunc varius tellus, eget
      molestie urna arcu ac turpis. Phasellus id sem elit. Vivamus pellentesque mauris vel ex
      laoreet varius. Vivamus non tempor libero. Nam consectetur nisi erat, ac varius elit porttitor
      quis. Morbi ullamcorper, tortor in sagittis tempus, justo ipsum pretium urna, ut bibendum nisl
      orci et eros. Quisque ut ipsum neque. Integer sapien dolor, vestibulum id maximus ac, pharetra
      eu augue.
      <Image src="https://unsplash.it/100" alt="Smallerer Unsplash" float="right" /> Aenean mauris
      tellus, facilisis sed quam non, tincidunt rutrum risus. Fusce quam urna, commodo vitae nunc
      condimentum, efficitur commodo libero. Sed dignissim odio enim, ac pharetra dui laoreet id.
      Suspendisse nec accumsan erat. Integer sit amet leo arcu. Proin sagittis blandit tempor.
      Vivamus at egestas lectus. Mauris eros tellus, egestas ac neque eget, lacinia sagittis ante.
      Phasellus faucibus suscipit erat, eget malesuada neque congue non.
    </p>
  );
};

export default App;
