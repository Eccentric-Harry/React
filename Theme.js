!function() {
    try {
        var d = document.documentElement,
            c = d.classList;
        
        // Remove existing classes
        c.remove('light', 'dark');
        
        // Get theme preference from local storage
        var e = localStorage.getItem('lc-dark-side');
        
        // Determining theme
        if ('system' === e || (!e && true)) {
            var t = '(prefers-color-scheme: dark)',
                m = window.matchMedia(t);
            
            // Apply theme based on system preference
            if (m.media !== t || m.matches) {
                d.style.colorScheme = 'dark';
                c.add('dark');
            } else {
                d.style.colorScheme = 'light';
                c.add('light');
            }
        } else if (e) {
            // Apply manually set theme preference
            c.add(e || '');
        }
    } catch (e) {
        // Error handling
    }
}()
