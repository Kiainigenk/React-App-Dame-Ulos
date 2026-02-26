import React from 'react';
import { useCart } from '../context/CartContext';

const CartSidebar = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
    isCartOpen,
    setIsCartOpen
  } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleWhatsAppOrder = () => {
    if (cartItems.length === 0) return;

    const phoneNumber = "6283199386794";
    
    let message = "Halo Admin Dame Ulos! 🧵\n\nSaya ingin memesan:\n\n";
    
    cartItems.forEach((item, index) => {
      const price = parseInt(item.price.replace(/[^0-9]/g, ''));
      message += `${index + 1}. *${item.name}*\n`;
      message += `   Kategori: ${item.category}\n`;
      message += `   Harga: ${item.price}\n`;
      message += `   Jumlah: ${item.quantity} pcs\n`;
      message += `   Subtotal: ${formatPrice(price * item.quantity)}\n\n`;
    });

    message += `━━━━━━━━━━━━━━━━\n`;
    message += `*Total: ${formatPrice(totalPrice)}*\n\n`;
    message += `Mohon konfirmasi ketersediaan stok dan info pengiriman. Terima kasih! 🙏`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="cart-overlay"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Floating Cart Button */}
      <button
        className="cart-float-btn"
        onClick={() => setIsCartOpen(true)}
        aria-label="Buka Keranjang"
      >
        <span className="cart-float-icon">🛒</span>
        {totalItems > 0 && (
          <span className="cart-badge">{totalItems}</span>
        )}
      </button>

      {/* Sidebar Panel */}
      <div className={`cart-sidebar ${isCartOpen ? 'cart-sidebar--open' : ''}`}>
        {/* Header */}
        <div className="cart-header">
          <div className="cart-header-left">
            <span className="cart-header-icon">🛒</span>
            <h2>Keranjang Belanja</h2>
          </div>
          <button
            className="cart-close-btn"
            onClick={() => setIsCartOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty-icon">🧺</div>
              <p>Keranjang masih kosong</p>
              <span>Tambahkan produk ulos favorit Anda</span>
            </div>
          ) : (
            <>
              {cartItems.map((item) => {
                const price = parseInt(item.price.replace(/[^0-9]/g, ''));
                return (
                  <div key={item.id} className="cart-item">
                    {/* Image */}
                    <div className="cart-item-img">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.querySelector('.cart-item-emoji').style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div
                        className="cart-item-emoji"
                        style={{ display: item.image ? 'none' : 'flex' }}
                      >
                        {item.emoji}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="cart-item-info">
                      <h4>{item.name}</h4>
                      <span className="cart-item-cat">{item.category}</span>
                      <p className="cart-item-price">{item.price}</p>
                    </div>

                    {/* Controls */}
                    <div className="cart-item-controls">
                      <div className="qty-control">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="qty-btn"
                        >−</button>
                        <span className="qty-num">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="qty-btn"
                        >+</button>
                      </div>
                      <p className="cart-item-subtotal">
                        {formatPrice(price * item.quantity)}
                      </p>
                      <button
                        className="cart-remove-btn"
                        onClick={() => removeFromCart(item.id)}
                        title="Hapus produk"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                );
              })}

              <button className="cart-clear-btn" onClick={clearCart}>
                Kosongkan Keranjang
              </button>
            </>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total ({totalItems} item)</span>
              <strong>{formatPrice(totalPrice)}</strong>
            </div>
            <button
              className="cart-whatsapp-btn"
              onClick={handleWhatsAppOrder}
            >
              <span>💬</span>
              Pesan via WhatsApp
            </button>
            <p className="cart-note">
              * Kami akan konfirmasi stok & ongkir setelah pesan diterima
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
