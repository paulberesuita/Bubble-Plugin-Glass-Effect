function(instance, properties, context) {
    instance.data.elementIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            let baseColor = instance.data.color === 'light' ? '255, 255, 255' : '0, 0, 0';
            
            element.style.backgroundColor = `rgba(${baseColor}, ${instance.data.opacity})`;
            element.style.backdropFilter = `blur(${instance.data.blur}px)`;
            element.style.webkitBackdropFilter = `blur(${instance.data.blur}px)`;
            element.style.borderRadius = '10px';
        }
    });
}