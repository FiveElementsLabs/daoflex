import DaoList from '../components/home/DaoList';

export default function Home() {

  function handleClick(e: any) {
    e.preventDefault();
    console.log('The link was clicked.');
    (window as any).unlockProtocol && (window as any).unlockProtocol.loadCheckoutModal()
  }

  return (
    <>
      <DaoList />
      <div>

      <h1>Unlock Demo</h1>
<p className="unlock-content locked">Unlock Demo is currently locked 🔒 </p>
<p className="unlock-content unlocked">Unlock Demo is currently unlocked 🎉</p>
<p className="unlock-content locked" onClick={handleClick}><button className="button">
    Unlock!
  </button></p>


      </div>
      
    </>
  );
}
