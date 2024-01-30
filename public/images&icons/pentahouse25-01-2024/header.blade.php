<!-- Header -->
<header>
	<nav class="navbar navbar-expand-lg navbar-light bg-light ctmNavBar">
		<div class="container">
			<a class="navbar-brand" href="{{route('site.home')}}">
				<img src="{{asset('img/new_Penta_Logo_h110.png')}}" alt="logo">
			</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
			        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">

				</ul>
				<ul class="navbar-nav mb-2 mb-lg-0">
					<li class="nav-item">
						<a class="nav-link home" aria-current="page" href="{{route('site.home')}}">Home </a>
					</li>
					<li class="nav-item">
						<a class="nav-link products" href="{{route('site.products')}}">Products 12</a>
					</li>
					<li class="nav-item">
						<a class="nav-link services" href="{{route('site.services')}}">Lighting Services </a>
					</li>
					<li class="nav-item">
						<a class="nav-link careers" href="{{route('site.careers')}}">Career Opportunities</a>
					</li>
					<li class="nav-item">
						<a class="nav-link gallery" href="{{route('site.gallery')}}">Gallery </a>
					</li>
					<li class="nav-item">
						<a class="nav-link blog" href="{{route('site.blog')}}">Blog </a>
					</li>
					<li class="nav-item">
						<a class="nav-link contact" href="{{route('site.contactus')}}">Contact Us </a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</header>