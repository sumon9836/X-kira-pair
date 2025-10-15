'use client';

interface HeaderProps {
  onRefresh?: () => void;
  showRefreshButton?: boolean;
}

export function Header({ onRefresh, showRefreshButton = false }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <i className="fab fa-whatsapp header-icon"></i>
          <a 
            href="https://x-kira-html.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ marginLeft: '12px' }}
          >
            <i className="fas fa-arrow-left"></i>
            <span>Back to Dashboard</span>
          </a>
        </div>
        <div className="header-right">
          <a 
            href="https://chat.whatsapp.com/CQyxExEBMGvEnkA32zqbNY" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-support" 
            title="Join Support Group"
          >
            <i className="fab fa-whatsapp"></i>
            <span className="support-text">Support</span>
          </a>
        </div>
      </div>
    </header>
  );
}