
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Search, LogOut, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { NAV_ITEMS } from './constants';
import { useAuth } from '../../../context/AuthContext';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuSearchQuery, setMenuSearchQuery] = useState('');
  
  // Animation state
  const [navBackgroundStyle, setNavBackgroundStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  // Handle scroll effect for sticky navbar shadow/height
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If the click is not on a dropdown button AND not inside the menu container, close menus
      if (
        !(event.target as HTMLElement).closest('button[data-menu-trigger]') &&
        !(event.target as HTMLElement).closest('.mega-menu-container')
      ) {
        setActiveSubmenu(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Reset search when active submenu changes
  useEffect(() => {
    setMenuSearchQuery('');
  }, [activeSubmenu]);

  // Sync sliding pill with active submenu
  useEffect(() => {
    if (activeSubmenu) {
      const idx = NAV_ITEMS.findIndex(item => item.title === activeSubmenu);
      if (idx !== -1) {
        handleItemHover(idx);
        return;
      }
    }
    // If no submenu is open, reset (unless hovering - handled by mouse events, 
    // but this effect runs when activeSubmenu changes, e.g. clicking outside)
    if (!activeSubmenu && hoveredIndex === null) {
       setNavBackgroundStyle(prev => ({ ...prev, opacity: 0 }));
    }
  }, [activeSubmenu]);

  const toggleSubmenu = (title: string, e: React.MouseEvent) => {
    // Prevent the document click listener from firing immediately
    e.stopPropagation();
    setActiveSubmenu(prev => prev === title ? null : title);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  // Animation Handlers
  const handleItemHover = (index: number) => {
    setHoveredIndex(index);
    const el = navItemsRef.current[index];
    if (el) {
      setNavBackgroundStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
        opacity: 1
      });
    }
  };

  const handleNavLeave = () => {
    if (activeSubmenu) {
      const idx = NAV_ITEMS.findIndex(item => item.title === activeSubmenu);
      if (idx !== -1) {
        handleItemHover(idx);
        return;
      }
    }
    setHoveredIndex(null);
    setNavBackgroundStyle(prev => ({ ...prev, opacity: 0 }));
  };

  // Helper to filter items based on search query
  const getFilteredItems = (megaMenu: any, query: string) => {
    if (!query) return [];
    const lowerQ = query.toLowerCase();
    const results: { title: string; href: string; context?: string }[] = [];

    megaMenu.columns.forEach((col: any) => {
      if (col.items) {
        col.items.forEach((item: any) => {
          if (item.title.toLowerCase().includes(lowerQ)) {
            results.push({ ...item, context: col.title });
          }
        });
      }
      if (col.groups) {
        col.groups.forEach((group: any) => {
          group.items.forEach((item: any) => {
            if (item.title.toLowerCase().includes(lowerQ)) {
              results.push({ ...item, context: group.title });
            }
          });
        });
      }
    });
    return results;
  };

  const activeItem = NAV_ITEMS.find(item => item.title === activeSubmenu);

  // Calculate search results safely
  let searchResults: { title: string; href: string; context?: string }[] = [];
  if (activeItem?.megaMenu && menuSearchQuery) {
    searchResults = getFilteredItems(activeItem.megaMenu, menuSearchQuery);
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
    >
      {/* Added 'relative' to the container to position absolute mega-menus correctly */}
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-13">

          {/* Left Section: Logo + Menu */}
          <div className="flex items-center gap-8 z-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-2 cursor-pointer group">
                <img src="https://gnjsoft.com/images/logo.png" className="h-12 w-auto" alt="GnJ Worldwide Logo" />
              </Link>
            </div>

            {/* Menu Items (Card Nav Animation) */}
            <div className="hidden lg:flex">
              <div 
                className={`relative flex items-center gap-1 px-3 py-1.5 rounded-full transition-all duration-300 ${scrolled ? 'bg-slate-100/50 border border-slate-200/50' : 'bg-white/40 backdrop-blur-md border border-white/40 shadow-sm'}`}
                onMouseLeave={handleNavLeave}
              >
                {/* Sliding Background Pill */}
                <div
                  className="absolute top-1.5 bottom-1.5 bg-black rounded-full transition-all duration-300 ease-out z-0"
                  style={{
                    left: navBackgroundStyle.left,
                    width: navBackgroundStyle.width,
                    opacity: navBackgroundStyle.opacity,
                  }}
                />

                {NAV_ITEMS.map((item, index) => {
                  const isActive = hoveredIndex === index || activeSubmenu === item.title;
                  
                  return (
                    <div
                      key={item.title}
                      ref={el => { navItemsRef.current[index] = el; }}
                      className="relative z-10"
                      onMouseEnter={() => handleItemHover(index)}
                    >
                      {item.children || item.megaMenu ? (
                        <button
                          data-menu-trigger="true"
                          onClick={(e) => toggleSubmenu(item.title, e)}
                          className={`flex items-center px-4 py-2 text-[13px] font-semibold rounded-full transition-colors duration-300 ${
                            isActive ? 'text-white' : 'text-slate-700'
                          }`}
                        >
                          {item.title}
                          <ChevronDown
                            className={`ml-1 w-3.5 h-3.5 transition-all duration-300 ${
                              isActive ? 'text-white' : 'text-slate-400'
                            } ${activeSubmenu === item.title ? 'rotate-180' : ''}`}
                          />
                        </button>
                      ) : (
                        <Link
                          to={item.href}
                          className={`flex items-center px-4 py-2 text-[13px] font-semibold rounded-full transition-colors duration-300 ${
                            isActive ? 'text-white' : 'text-slate-700'
                          }`}
                        >
                          {item.title}
                        </Link>
                      )}

                      {/* Regular Dropdown (Non-Mega) */}
                      {item.children && !item.megaMenu && activeSubmenu === item.title && (
                        <div className="absolute top-full left-0 mt-4 w-60 bg-white rounded-2xl shadow-xl border border-slate-200 py-3 z-50 animate-fade-in-up">
                          {item.children.map((subItem) => (
                            <Link
                              key={subItem.title}
                              to={subItem.href}
                              onClick={() => setActiveSubmenu(null)}
                              className="flex items-center px-6 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-2 z-20">
            {isAuthenticated ? (
              <div className="flex items-center gap-3 pl-2">
                <div className="text-right">
                  <div className="text-xs font-bold text-slate-900">{user?.name || user?.email?.split('@')[0]}</div>
                  <div className="text-[10px] text-slate-500">Member</div>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 bg-slate-100 text-slate-600 hover:bg-red-50 hover:text-red-600 rounded-full transition-colors"
                  title="Logout"
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <div className="flex items-center p-0.5 bg-white/90 backdrop-blur-sm border border-slate-200/80 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
                <Link
                  to="/login"
                  className="px-5 py-2 text-sm font-bold text-slate-600 hover:text-slate-900 transition-all"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="ml-1 px-6 py-2 text-sm font-bold text-white bg-yellow-300 hover:bg-yellow-400 rounded-full shadow-md transition-all hover:scale-105 active:scale-95"
                >
                  Sign up
                </Link>
              </div>
            )}

            <div className="relative ml-2 group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <a
                href="https://calendly.com/gnjworldwide-support"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-bold py-2.5 px-6 rounded-full transition-all duration-300 transform group-hover:scale-105"
              >
                Meeting <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <Link
              to="/contact"
              className="relative overflow-hidden group bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold py-2.5 px-6 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg ml-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center gap-2 z-20">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        {activeItem?.megaMenu && activeSubmenu === activeItem.title && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-2xl rounded-b-2xl border-t border-slate-100 pt-4 z-40 animate-slide-down mega-menu-container">
            {/* Invisible bridge */}
            <div className="absolute top-0 left-0 w-full h-4 bg-transparent"></div>

            {/* Close Button */}
            <button
              onClick={(e) => { e.stopPropagation(); setActiveSubmenu(null); }}
              className="absolute top-2 right-2 p-2.5 text-black font-bold z-50 shadow-sm"
            >
              <X size={16} />
            </button>

            {/* Search Bar Area */}
            <div className="px-6 pt-4 pb-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder={`Find in ${activeItem.title}...`}
                  className="w-1/2 pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all text-sm font-medium text-slate-700 placeholder:text-slate-400 shadow-sm"
                  value={menuSearchQuery}
                  onChange={(e) => setMenuSearchQuery(e.target.value)}
                  autoFocus
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>

            {menuSearchQuery ? (
              // Search Results View
              <div className="p-8 min-h-[250px] max-h-[60vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                {searchResults.length > 0 ? (
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Search Results ({searchResults.length})</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {searchResults.map((res, idx) => (
                        <Link
                          key={idx}
                          to={res.href}
                          onClick={() => setActiveSubmenu(null)}
                          className="flex flex-col p-4 rounded-xl bg-white hover:shadow-md border border-transparent hover:border-slate-100 transition-all group"
                        >
                          <span className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1 text-sm flex items-center justify-between">
                            {res.title}
                            <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                          </span>
                          {res.context && <span className="text-xs text-slate-500">{res.context}</span>}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full py-12 text-slate-400">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                      <Search size={24} className="text-slate-300" />
                    </div>
                    <p className="font-medium text-slate-500">No matches found for "{menuSearchQuery}"</p>
                    <p className="text-sm mt-1">Try checking for typos or using different keywords.</p>
                  </div>
                )}
              </div>
            ) : (
              // Standard Column View
              <div className="flex flex-row p-8 gap-8">

                {/* Left Content Banner */}
                {activeItem.megaMenu.leftContent && (
                  <div className="w-72 flex-shrink-0 bg-white rounded-2xl p-8 flex flex-col h-full border border-slate-100 shadow-sm">
                    {activeItem.megaMenu.leftContent.badgeText && (
                      <span className="inline-block px-3 py-1 bg-yellow-400 text-slate-900 text-[10px] font-bold rounded-full mb-6 w-fit shadow-sm">
                        {activeItem.megaMenu.leftContent.badgeText}
                      </span>
                    )}
                    <h3 className="font-bold text-2xl text-slate-900 mb-3 leading-tight">
                      {activeItem.megaMenu.leftContent.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-8 leading-relaxed flex-grow">
                      {activeItem.megaMenu.leftContent.description}
                    </p>
                    {activeItem.megaMenu.leftContent.image && (
                      <img
                        src={activeItem.megaMenu.leftContent.image}
                        alt="Feature"
                        className="w-full h-auto rounded-xl mix-blend-multiply shadow-inner"
                      />
                    )}
                  </div>
                )}

                {/* Columns */}
                <div className="flex-1 grid grid-cols-5 gap-8 py-2">
                  {activeItem.megaMenu.columns.map((column, idx) => (
                    <div key={idx} className="space-y-6">
                      {column.groups ? (
                        // Render multiple groups in one column
                        column.groups.map((group, gIdx) => (
                          <div key={gIdx} className="space-y-4">
                            {group.title ? (
                              <h4 className="text-[13px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200/60 pb-2">
                                {group.title}
                              </h4>
                            ) : group.title === "" ? (
                              // Render spacer if empty string
                              <h4 className="text-[13px] font-bold text-transparent border-b border-transparent pb-2 select-none" aria-hidden="true">
                                &nbsp;
                              </h4>
                            ) : null}

                            <ul className="space-y-1">
                              {group.items.map((subItem, sIdx) => (
                                <li key={sIdx}>
                                  <Link
                                    to={subItem.href}
                                    onClick={() => setActiveSubmenu(null)}
                                    className="group/item flex items-center p-2 -ml-2 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-3 group-hover/item:bg-yellow-500 transition-colors"></span>
                                    <span className="text-[14px] font-medium text-slate-700 group-hover/item:text-slate-900 transition-colors">
                                      {subItem.title}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))
                      ) : (
                        // Render standard single column
                        <div className="space-y-4">
                          {column.title ? (
                            <h4 className="text-[13px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200/60 pb-2">
                              {column.title}
                            </h4>
                          ) : column.title === "" ? (
                            <h4 className="text-[13px] font-bold text-transparent border-b border-transparent pb-2 select-none" aria-hidden="true">
                              &nbsp;
                            </h4>
                          ) : null}

                          <ul className="space-y-1">
                            {column.items?.map((subItem, sIdx) => (
                              <li key={sIdx}>
                                <Link
                                  to={subItem.href}
                                  onClick={() => setActiveSubmenu(null)}
                                  className="group/item flex items-center p-2 -ml-2 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-3 group-hover/item:bg-yellow-500 transition-colors"></span>
                                  <span className="text-[14px] font-medium text-slate-700 group-hover/item:text-slate-900 transition-colors">
                                    {subItem.title}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white animate-fade-in flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <img src="https://www.gnjworldwide.com/Logo.png" className="h-8 w-auto" alt="Logo" />
              <span className="font-bold text-lg text-slate-900">GnJ<span className="text-yellow-500">Worldwide</span></span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-slate-500 hover:bg-slate-100 rounded-full"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Auth Status */}
          <div className="px-4 py-6 border-b border-slate-100 bg-slate-50/50">
            {isAuthenticated ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                    {(user?.name || user?.email || '?').charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{user?.name || user?.email?.split('@')[0]}</div>
                    <div className="text-xs text-slate-500">{user?.email}</div>
                  </div>
                </div>
                <button onClick={handleLogout} className="text-sm font-medium text-red-600 px-3 py-1 bg-red-50 rounded-lg">
                  Logout
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="text-center py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold bg-white">
                  Log In
                </Link>
                <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)} className="text-center py-2.5 rounded-xl bg-blue-600 text-white font-bold">
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          <div className="flex-1 overflow-y-auto py-2 px-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <div key={item.title} className="border-b border-gray-50 last:border-0 pb-2">
                <div
                  className="flex items-center justify-between w-full px-4 py-3 text-base font-semibold text-slate-800 rounded-xl hover:bg-slate-50 cursor-pointer active:bg-slate-100 transition-colors"
                  onClick={() => {
                    if (item.children || item.megaMenu) {
                      setActiveSubmenu(activeSubmenu === item.title ? null : item.title);
                    } else {
                      setIsMobileMenuOpen(false);
                    }
                  }}
                >
                  {item.children || item.megaMenu ? (
                    <span>{item.title}</span>
                  ) : (
                    <Link to={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                      {item.title}
                    </Link>
                  )}

                  {(item.children || item.megaMenu) && (
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${activeSubmenu === item.title ? 'rotate-180 text-yellow-500' : ''}`}
                    />
                  )}
                </div>

                {/* Mobile Submenu Rendering */}
                {activeSubmenu === item.title && (
                  <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50/50 rounded-xl mt-1">
                    {item.megaMenu ? (
                      item.megaMenu.columns.map((col, idx) => (
                        <div key={idx} className="mb-4">
                          {col.groups ? (
                            col.groups.map((group, gIdx) => (
                              <div key={gIdx} className="mb-4">
                                {group.title && (
                                  <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-3">{group.title}</h5>
                                )}
                                {group.items.map(subItem => (
                                  <Link
                                    key={subItem.title}
                                    to={subItem.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block py-2 px-3 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                  >
                                    {subItem.title}
                                  </Link>
                                ))}
                              </div>
                            ))
                          ) : (
                            <>
                              {col.title && (
                                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-3">{col.title}</h5>
                              )}
                              {col.items?.map(subItem => (
                                <Link
                                  key={subItem.title}
                                  to={subItem.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="block py-2 px-3 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                >
                                  {subItem.title}
                                </Link>
                              ))}
                            </>
                          )}
                        </div>
                      ))
                    ) : (
                      item.children?.map((subItem) => (
                        <Link
                          key={subItem.title}
                          to={subItem.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 px-3 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          {subItem.title}
                        </Link>
                      ))
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-100 flex flex-col gap-3">
            <div className="relative w-full group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <a href="https://calendly.com/gnjworldwide-support" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="relative w-full flex justify-center items-center bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-4 rounded-2xl transition-all active:scale-95">
                Book a Meeting <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full flex justify-center items-center bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 rounded-2xl transition-all shadow-lg active:scale-95">
              Contact Us <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
