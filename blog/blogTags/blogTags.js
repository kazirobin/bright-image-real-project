        // Sample data for tags and blog posts
        const tagsData = [
            { name: 'Clipping Path', count: 15, popularity: 'high' },
            { name: 'Photo Editing', count: 12, popularity: 'high' },
            { name: 'E-commerce', count: 10, popularity: 'high' },
            { name: 'Product Photography', count: 8, popularity: 'medium' },
            { name: 'Background Removal', count: 7, popularity: 'medium' },
            { name: 'Photoshop', count: 18, popularity: 'high' },
            { name: 'Image Editing', count: 9, popularity: 'medium' },
            { name: 'Fashion Photography', count: 6, popularity: 'medium' },
            { name: 'Jewelry Photography', count: 5, popularity: 'low' },
            { name: 'Color Correction', count: 7, popularity: 'medium' },
            { name: 'Retouching', count: 8, popularity: 'medium' },
            { name: 'Masking', count: 6, popularity: 'low' },
            { name: 'Beauty Retouching', count: 4, popularity: 'low' },
            { name: 'Real Estate', count: 3, popularity: 'low' },
            { name: 'AI Editing', count: 5, popularity: 'medium' }
        ];

        const blogPosts = [
            {
                id: 1,
                title: 'Advanced Clipping Path Techniques for E-commerce Success',
                excerpt: 'Master the art of precision clipping paths with our comprehensive guide. Learn professional techniques that will transform your product photography.',
                image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=250&fit=crop',
                category: 'tutorial',
                date: 'December 15, 2024',
                readTime: '8 min read',
                author: {
                    name: 'John Smith',
                    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=30&h=30&fit=crop&crop=face'
                },
                stats: {
                    views: '2.4k',
                    likes: '156'
                },
                tags: ['Clipping Path', 'E-commerce', 'Photo Editing', 'Photoshop']
            },
            {
                id: 2,
                title: '10 Essential Product Photography Tips for Better Clipping Paths',
                excerpt: 'Learn how to capture product photos that make clipping path editing easier and more effective.',
                image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop',
                category: 'tutorial',
                date: 'December 12, 2024',
                readTime: '5 min read',
                author: {
                    name: 'Sarah Johnson',
                    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=30&h=30&fit=crop&crop=face'
                },
                stats: {
                    views: '1.2k',
                    likes: '89'
                },
                tags: ['Product Photography', 'Clipping Path', 'Photo Editing', 'Tips']
            },
            {
                id: 3,
                title: 'Fashion Photography: Mastering Complex Clipping Paths',
                excerpt: 'Discover advanced techniques for handling intricate fashion items, flowing fabrics, and detailed textures.',
                image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop',
                category: 'tips',
                date: 'December 10, 2024',
                readTime: '7 min read',
                author: {
                    name: 'Mike Chen',
                    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=30&h=30&fit=crop&crop=face'
                },
                stats: {
                    views: '956',
                    likes: '67'
                },
                tags: ['Fashion Photography', 'Clipping Path', 'Masking', 'Retouching']
            },
            {
                id: 4,
                title: '2024 Jewelry Photography Trends: What\'s Changing',
                excerpt: 'Explore the latest trends in jewelry photography and how they impact clipping path requirements.',
                image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=250&fit=crop',
                category: 'industry',
                date: 'December 8, 2024',
                readTime: '6 min read',
                author: {
                    name: 'Emma Davis',
                    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=30&h=30&fit=crop&crop=face'
                },
                stats: {
                    views: '743',
                    likes: '52'
                },
                tags: ['Jewelry Photography', 'Industry News', 'Photo Editing', 'Retouching']
            },
            {
                id: 5,
                title: 'How Professional Clipping Paths Increased Sales by 40%',
                excerpt: 'Real case study showing how a furniture retailer transformed their product images and achieved remarkable sales growth.',
                image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
                category: 'case-study',
                date: 'December 5, 2024',
                readTime: '10 min read',
                author: {
                    name: 'David Wilson',
                    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=30&h=30&fit=crop&crop=face'
                },
                stats: {
                    views: '1.8k',
                    likes: '124'
                },
                tags: ['Case Study', 'E-commerce', 'Clipping Path', 'Business']
            },
            {
                id: 6,
                title: 'Background Removal: Manual vs AI - Which is Better?',
                excerpt: 'Compare traditional manual clipping path techniques with modern AI-powered background removal tools.',
                image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=250&fit=crop',
                category: 'tutorial',
                date: 'December 3, 2024',
                readTime: '8 min read',
                author: {
                    name: 'John Smith',
                    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=30&h=30&fit=crop&crop=face'
                },
                stats: {
                    views: '2.1k',
                    likes: '156'
                },
                tags: ['Background Removal', 'AI Editing', 'Clipping Path', 'Technology']
            },
            {
                id: 7,
                title: 'Color Correction After Clipping: Pro Tips',
                excerpt: 'Master the art of color correction and enhancement after creating clipping paths.',
                image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=250&fit=crop',
                category: 'tips',
                date: 'November 30, 2024',
                readTime: '6 min read',
                author: {
                    name: 'Sarah Johnson',
                    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=30&h=30&fit=crop&crop=face'
                },
                stats: {
                    views: '834',
                    likes: '71'
                },
                tags: ['Color Correction', 'Photo Editing', 'Retouching', 'Tips']
            },
            {
                id: 8,
                title: 'Beauty Retouching: Natural vs Commercial Approaches',
                excerpt: 'Learn the differences between natural beauty retouching and commercial approaches for various client needs.',
                image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=250&fit=crop',
                category: 'tutorial',
                date: 'November 28, 2024',
                readTime: '9 min read',
                author: {
                    name: 'Lisa Brown',
                    avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=30&h=30&fit=crop&crop=face'
                },
                stats: {
                    views: '1.1k',
                    likes: '98'
                },
                tags: ['Beauty Retouching', 'Photo Editing', 'Retouching', 'Fashion Photography']
            }
        ];

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            const tagsCloud = document.getElementById('tags-cloud');
            const selectedTagsContainer = document.getElementById('selected-tags-container');
            const postsContainer = document.getElementById('posts-container');
            const postsTitle = document.getElementById('posts-title');
            const postsCount = document.getElementById('posts-count');
            const loadMoreBtn = document.getElementById('load-more-btn');
            const searchInput = document.getElementById('search-input');
            
            let selectedTags = [];
            let visiblePosts = 6;
            let filteredPosts = [...blogPosts];
            
            // Function to render tags cloud
            function renderTagsCloud() {
                tagsCloud.innerHTML = '';
                
                tagsData.forEach(tag => {
                    const tagElement = document.createElement('span');
                    tagElement.className = `tag ${tag.popularity === 'high' ? 'tag-lg' : tag.popularity === 'low' ? 'tag-sm' : ''}`;
                    tagElement.textContent = tag.name;
                    tagElement.innerHTML += `<span class="tag-count">${tag.count}</span>`;
                    
                    if (selectedTags.includes(tag.name)) {
                        tagElement.classList.add('active');
                    }
                    
                    tagElement.addEventListener('click', () => toggleTag(tag.name));
                    tagsCloud.appendChild(tagElement);
                });
            }
            
            // Function to render selected tags
            function renderSelectedTags() {
                selectedTagsContainer.innerHTML = '';
                
                if (selectedTags.length === 0) {
                    selectedTagsContainer.style.display = 'none';
                    return;
                }
                
                selectedTagsContainer.style.display = 'flex';
                
                selectedTags.forEach(tag => {
                    const selectedTagElement = document.createElement('div');
                    selectedTagElement.className = 'selected-tag';
                    selectedTagElement.innerHTML = `
                        ${tag}
                        <span class="remove-tag" data-tag="${tag}">×</span>
                    `;
                    selectedTagsContainer.appendChild(selectedTagElement);
                });
                
                // Add clear all option
                const clearAllElement = document.createElement('span');
                clearAllElement.className = 'clear-tags';
                clearAllElement.textContent = 'Clear all';
                clearAllElement.addEventListener('click', clearAllTags);
                selectedTagsContainer.appendChild(clearAllElement);
                
                // Add event listeners to remove buttons
                document.querySelectorAll('.remove-tag').forEach(button => {
                    button.addEventListener('click', (e) => {
                        const tagToRemove = e.target.getAttribute('data-tag');
                        removeTag(tagToRemove);
                    });
                });
            }
            
            // Function to toggle tag selection
            function toggleTag(tagName) {
                if (selectedTags.includes(tagName)) {
                    removeTag(tagName);
                } else {
                    addTag(tagName);
                }
            }
            
            // Function to add a tag
            function addTag(tagName) {
                if (!selectedTags.includes(tagName)) {
                    selectedTags.push(tagName);
                    updatePosts();
                    renderTagsCloud();
                    renderSelectedTags();
                }
            }
            
            // Function to remove a tag
            function removeTag(tagName) {
                selectedTags = selectedTags.filter(tag => tag !== tagName);
                updatePosts();
                renderTagsCloud();
                renderSelectedTags();
            }
            
            // Function to clear all tags
            function clearAllTags() {
                selectedTags = [];
                updatePosts();
                renderTagsCloud();
                renderSelectedTags();
            }
            
            // Function to filter posts based on selected tags
            function filterPosts() {
                if (selectedTags.length === 0) {
                    return [...blogPosts];
                }
                
                return blogPosts.filter(post => {
                    return selectedTags.every(tag => post.tags.includes(tag));
                });
            }
            
            // Function to update posts display
            function updatePosts() {
                filteredPosts = filterPosts();
                visiblePosts = 6;
                renderPosts();
                updatePostsInfo();
                
                // Show/hide load more button
                if (visiblePosts >= filteredPosts.length) {
                    loadMoreBtn.style.display = 'none';
                } else {
                    loadMoreBtn.style.display = 'inline-flex';
                }
            }
            
            // Function to render posts
            function renderPosts() {
                postsContainer.innerHTML = '';
                
                if (filteredPosts.length === 0) {
                    postsContainer.innerHTML = `
                        <div class="no-posts-message">
                            <i class="fas fa-search"></i>
                            <h3>No articles found</h3>
                            <p>Try selecting different tags or clearing your current selection to see more articles.</p>
                            <button class="btn btn-primary" onclick="clearAllTags()">Clear All Tags</button>
                        </div>
                    `;
                    return;
                }
                
                const postsToShow = filteredPosts.slice(0, visiblePosts);
                
               postsToShow.forEach(post => {
    const postElement = document.createElement('article');
    postElement.className = 'blog-card fade-in';
    postElement.setAttribute('data-post-id', post.id);
    
    postElement.innerHTML = `
        <a href="../blogDetails/blogDetails.html" class="blog-card-link">
            <div class="blog-image">
                <img src="${post.image}" alt="${post.title}">
                <div class="blog-overlay"></div>
                <span class="category-tag ${post.category}">${post.category.charAt(0).toUpperCase() + post.category.slice(1).replace('-', ' ')}</span>
            </div>
            <div class="blog-content">
                <div class="post-meta">
                    <span class="date">${post.date}</span>
                    <span class="read-time">${post.readTime}</span>
                </div>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <div class="post-tags">
                    ${post.tags.map(tag => `<span class="post-tag">${tag}</span>`).join('')}
                </div>
                <div class="blog-footer">
                    <div class="author-mini">
                        <img src="${post.author.avatar}" alt="${post.author.name}">
                        <span>${post.author.name}</span>
                    </div>
                    <div class="post-stats">
                        <span><i class="fas fa-eye"></i> ${post.stats.views}</span>
                        <span><i class="fas fa-heart"></i> ${post.stats.likes}</span>
                    </div>
                </div>
            </div>
        </a>
    `;
    
    postsContainer.appendChild(postElement);
});
                
                // Add animation to new elements
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                        }
                    });
                }, { threshold: 0.1 });
                
                document.querySelectorAll('.fade-in').forEach(el => {
                    observer.observe(el);
                });
            }
            
            // Function to update posts information
            function updatePostsInfo() {
                if (selectedTags.length === 0) {
                    postsTitle.textContent = 'All Articles';
                } else if (selectedTags.length === 1) {
                    postsTitle.textContent = `Articles tagged "${selectedTags[0]}"`;
                } else {
                    postsTitle.textContent = `Articles tagged with ${selectedTags.length} filters`;
                }
                
                postsCount.textContent = `Showing ${Math.min(visiblePosts, filteredPosts.length)} of ${filteredPosts.length} articles`;
            }
            
            // Load more functionality
            loadMoreBtn.addEventListener('click', function() {
                visiblePosts += 3;
                renderPosts();
                updatePostsInfo();
                
                if (visiblePosts >= filteredPosts.length) {
                    loadMoreBtn.style.display = 'none';
                }
            });
            
            // Search functionality
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                
                if (searchTerm.length < 2) {
                    renderTagsCloud();
                    return;
                }
                
                const filteredTags = tagsData.filter(tag => 
                    tag.name.toLowerCase().includes(searchTerm)
                );
                
                tagsCloud.innerHTML = '';
                
                if (filteredTags.length === 0) {
                    tagsCloud.innerHTML = '<p>No tags found matching your search.</p>';
                    return;
                }
                
                filteredTags.forEach(tag => {
                    const tagElement = document.createElement('span');
                    tagElement.className = `tag ${tag.popularity === 'high' ? 'tag-lg' : tag.popularity === 'low' ? 'tag-sm' : ''}`;
                    tagElement.textContent = tag.name;
                    tagElement.innerHTML += `<span class="tag-count">${tag.count}</span>`;
                    
                    if (selectedTags.includes(tag.name)) {
                        tagElement.classList.add('active');
                    }
                    
                    tagElement.addEventListener('click', () => toggleTag(tag.name));
                    tagsCloud.appendChild(tagElement);
                });
            });
            
            // Make functions available globally for onclick handlers
            window.addTag = addTag;
            window.clearAllTags = clearAllTags;
            
            // Initialize the page
            renderTagsCloud();
            renderSelectedTags();
            updatePosts();
        });