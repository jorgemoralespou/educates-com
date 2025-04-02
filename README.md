# Educates Commercial Website

This project is the main Educates Commercial Website


## Development

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Docker

You can either build the container locally or pull the pre-built image from GitHub Container Registry.

### Using Pre-built Image

The container images are available for multiple architectures:
- linux/amd64 (Intel/AMD 64-bit)
- linux/arm64 (ARM 64-bit)

Docker will automatically pull the correct image for your platform:

```bash
# Pull the latest image
docker pull ghcr.io/jorgemoralespou/educates-com:main

# Run the container
docker run -d -p 8080:80 --name educates-website ghcr.io/jorgemoralespou/educates-com:main
```

### Building Locally

```bash
# Build the Docker image
docker build -t educates-website .
```

### Running the Container

```bash
# Run the container
docker run -d -p 8080:80 --name educates-website educates-website

# The application will be available at http://localhost:8080
```

### Container Management

```bash
# Stop the container
docker stop educates-website

# Start a stopped container
docker start educates-website

# Remove the container
docker rm -f educates-website
```

## CI/CD

This project uses GitHub Actions for continuous integration and deployment:

- Every push to the main branch builds and pushes a new Docker image to GitHub Container Registry
- Tagged releases (v*.*.* format) create versioned images
- Pull requests trigger builds but don't push to the registry
- Images are available at `ghcr.io/jorgemoralespou/educates-com`
- Multi-architecture support: builds for both AMD64 and ARM64 platforms

Available tags:
- `main` - Latest build from the main branch
- `v1.0.0` - Specific version release
- `v1.0` - Latest patch release of 1.0
- `v1` - Latest minor release of major version 1
- `sha-<commit>` - Specific commit build

Each tag is available for both AMD64 and ARM64 architectures, allowing the image to run natively on:
- Intel/AMD based systems (most PCs and servers)
- ARM-based systems (Apple Silicon Macs, AWS Graviton, etc.)
