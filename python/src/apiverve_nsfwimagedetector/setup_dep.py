from setuptools import setup, find_packages

setup(
    name='apiverve_nsfwimagedetector',
    version='1.2.2',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='NSFW Image Detector scans uploaded photos to determine whether an image contains adult content. Send a JPG, PNG, or GIF file up to 10 MB to receive safe and adult content boolean flags.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/nsfwimagedetector?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
