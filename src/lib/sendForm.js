// Sends a form's contents to Formspree. Returns true if it worked.
export async function sendForm(endpoint, form) {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    })
    return response.ok
  } catch {
    return false // e.g. no internet connection
  }
}