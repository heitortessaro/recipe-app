import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BtnsExploreRecepies from '../components/BtnsExploreRecepies';
import '../styles/components/Header.css';
import '../styles/pages/PageExploreFoods.css';

export default function ExploreFoods() {
  return (
    <div className="ExploreFoods">
      <Header title="Explore Foods" searchEnabled={ false } />
      <BtnsExploreRecepies type="foods" />
      <div>
        <Footer />
      </div>
    </div>
  );
}
