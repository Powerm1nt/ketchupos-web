import './ProjWidget.scss';

function ProjWidget() {
  return (
    <a className="coming-soon" href="https://github.com/KetchupOS">
      <div className="projname">
        <img 
          className="projname-logo" 
          alt="keOS-logo" 
            src="https://raw.githubusercontent.com/KetchupOS/KetchupOS/master/Icons/KetchupOS-Logo.svg" 
        />
        
        <div className="projabout">
          <span className="proj-title">KetchupOS<sup>(keOS)</sup></span>
          <span className="proj-desc">Modern. Powerful. Responsive.</span>
        </div>
      </div>

      <span className="proj-status">Coming soon.</span>
    </a>
  );
}

export default ProjWidget;
