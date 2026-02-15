from setuptools import setup, find_packages

setup(
    name='apiverve_nsfwimagedetector',
    version='1.1.13',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='NSFW Detector is a simple tool for detecting NSFW content. It returns a boolean',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/nsfwimagedetector?utm_source=pypi&utm_medium=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
