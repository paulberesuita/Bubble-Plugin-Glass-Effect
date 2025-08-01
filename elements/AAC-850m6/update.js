function(instance, properties, context) {
    // Store all properties in instance.data for later use
    instance.data.elementIds = properties.id.split(',').map(id => id.trim());
    instance.data.color = properties.color;
    instance.data.opacity = properties.opacity;
    instance.data.blur = properties.blur;
    
    instance.data.elementIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            // Determine base color based on stored color property
            let baseColor = instance.data.color === 'light' ? '255, 255, 255' : '0, 0, 0';
    
            // Use stored properties for styling
            element.style.background = `rgba(${baseColor}, ${instance.data.opacity})`;
            element.style.setProperty('backdrop-filter', `blur(${instance.data.blur}px)`, 'important');
            element.style.setProperty('-webkit-backdrop-filter', `blur(${instance.data.blur}px)`, 'important');
        }
    });
}