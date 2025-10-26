'use client';

import { Header } from '../components/Header';
import { PairForm } from '../components/PairForm';
import { SessionsList } from '../components/SessionsList';
import { BannedUsersPanel } from '../components/BannedUsersPanel';
import { ToastContainer } from '../components/Toast';
import { useToast } from '../hooks/useToast';

export default function Dashboard() {
  const { toasts, showToast, removeToast } = useToast();

  const handleRefresh = () => {
    window.location.reload();
  };

  const handlePairSuccess = (number: string) => {
    showToast('Success', `Phone number ${number} paired successfully!`, 'success');
  };

  return (
    <>
      <Header onRefresh={handleRefresh} showRefreshButton={true} />
      
      <main className="main-content">
        {/* Info Banner */}
        <section className="info-banner">
          <div className="info-card">
            <div className="info-header">
              <i className="fab fa-whatsapp"></i>
              <h2>X-kira WhatsApp Bot</h2>
            </div>
            <div className="info-content">
              <p className="info-main">
                <strong>✨ Free WhatsApp Bot - No Panel, No Server Required!</strong>
              </p>
              <p className="info-description">
                Just pair your number and run the bot instantly. X-kira is a powerful WhatsApp bot that works without any complex setup or server management.
              </p>
              <div className="info-features">
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>No VPS or hosting needed</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>No control panel required</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Simple pairing process</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Start using in seconds</span>
                </div>
              </div>
              <p className="info-guide">
                <i className="fas fa-info-circle"></i>
                Enter your WhatsApp number below, get your pairing code, and link your device - it's that easy!
              </p>
            </div>
          </div>
        </section>

        {/* Action Section */}
        <section className="action-section">
          <div className="action-cards">
            <PairForm 
              onSuccess={handlePairSuccess}
              showToast={showToast}
            />
          </div>
        </section>

        {/* Banned Users Section */}
        <BannedUsersPanel showToast={showToast} />

        {/* Sessions Section */}
        <SessionsList showToast={showToast} />
      </main>

      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </>
  );
}