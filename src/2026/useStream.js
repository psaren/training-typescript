const useStream = (url) => {
  const [content, setContent] = useState('');
  const decoder = new TextDecoder();
  useEffect(() => {
    const controller = new AbortController();
    fetch(url, { signal: controller.signal }).then(async(response) => {
      const reader = response.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) return;
        const chunk = decoder.decode(value, { stream: true });
        setContent(prev => prev + chunk);
      }
    }).catch(err => {
      if (err?.name === 'AbortError') {
        console.warn('Request abort');
      } else {
        console.error(err);
      }
    })
    return () => controller.abort();
  }, [url]);
  return content;
};