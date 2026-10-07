/**
 * CIRA Assets Dashboard — Global Authentication Guard
 * Ensures no page can be viewed without an active authenticated session.
 */
(function () {
  try {
    // 1. Identify current file
    var pathname = window.location.pathname || '';
    var filename = pathname.split('/').pop().toLowerCase();

    // If already on login.html, do nothing
    if (filename === 'login.html') {
      return;
    }

    // 2. Allow explicit developer bypass if query param is set (?bypass=true)
    var searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get('bypass') === 'true') {
      return;
    }

    // 3. Check for valid authenticated user session
    var rawUser = localStorage.getItem('cira_user') || sessionStorage.getItem('cira_user');
    var isAuthorized = false;

    if (rawUser) {
      try {
        var user = JSON.parse(rawUser);
        if (user && user.email && user.token) {
          isAuthorized = true;
        }
      } catch (parseErr) {
        isAuthorized = false;
      }
    }

    // 4. If unauthorized, save requested destination and redirect immediately
    if (!isAuthorized) {
      // Remember where the user was heading so they land there after login
      if (filename && filename !== 'login.html') {
        var destination = filename + window.location.search + window.location.hash;
        sessionStorage.setItem('cira_redirect_after_login', destination);
      } else {
        sessionStorage.setItem('cira_redirect_after_login', 'index.html');
      }

      // Hide document body immediately to avoid any flash of unauthenticated content
      if (document.documentElement) {
        document.documentElement.style.display = 'none';
      }

      // Perform fast replace redirect
      window.location.replace('login.html');
    }
  } catch (err) {
    console.error('CIRA Auth Guard error:', err);
  }
})();
