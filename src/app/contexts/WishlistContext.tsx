"use client";
import React, {
  createContext,
  type ReactNode,
  useState,
  useContext,
  useEffect,
} from "react";

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface IWishlistContext {
  wishlistItems: WishlistItem[];
  wishlistCount: number;
  addToWishlist: (product: WishlistItem) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  getWishlistCount: () => number;
}

export const WishlistContext = createContext<IWishlistContext>({
  wishlistItems: [],
  wishlistCount: 0,
  addToWishlist: () => {},
  removeFromWishlist: () => {},
  isInWishlist: () => false,
  getWishlistCount: () => 0,
});

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [wishlistCount, setWishlistCount] = useState<number>(0);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlistItems(JSON.parse(storedWishlist));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
    setWishlistCount(wishlistItems.length);
  }, [wishlistItems]);

  const addToWishlist = (product: WishlistItem) => {
    setWishlistItems((prevItems) => {
      if (!prevItems.some((item) => item.id === product.id)) {
        return [...prevItems, product];
      }
      return prevItems;
    });
  };

  const removeFromWishlist = (productId: string) => {
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const isInWishlist = (productId: string) => {
    return wishlistItems.some((item) => item.id === productId);
  };

  const getWishlistCount = () => {
    return wishlistItems.length;
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        wishlistCount,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        getWishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};