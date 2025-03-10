<script lang="ts">
	import Fa from 'svelte-fa';
	import { faFreebsd, faGithub } from '@fortawesome/free-brands-svg-icons';
</script>

<footer class="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
	<nav>
		<h6 class="footer-title">Poudriere</h6>
		<a class="link link-hover" href="https://github.com/freebsd/poudriere" target="_blank"
			>Source Code</a
		>
		<a class="link link-hover" href="https://github.com/freebsd/poudriere/issues" target="_blank"
			>Issues</a
		>
		<a class="link link-hover" href="https://github.com/freebsd/poudriere/pulls" target="_blank"
			>Pull Requests</a
		>
		<a
			class="link link-hover"
			href="https://github.com/freebsd/poudriere/discussions"
			target="_blank">Discussions</a
		>
		<a class="link link-hover" href="https://github.com/freebsd/poudriere/wiki" target="_blank"
			>Wiki</a
		>
		<a class="link link-hover" href="https://github.com/freebsd/poudriere/security" target="_blank"
			>Security</a
		>
	</nav>
	<nav>
		<h6 class="footer-title">FreeBSD</h6>
		<a class="link link-hover" href="https://www.freebsd.org/where/" target="_blank">Download</a>
		<a class="link link-hover" href="https://cgit.freebsd.org/src/" target="_blank">Source Code</a>
		<a class="link link-hover" href="https://bugs.freebsd.org/bugzilla/" target="_blank">Bugs</a>
		<a class="link link-hover" href="https://reviews.freebsd.org" target="_blank">Pull Requests</a>
		<a class="link link-hover" href="https://ci.freebsd.org" target="_blank"
			>Continuous Integration</a
		>
		<a class="link link-hover" href="https://wiki.freebsd.org/FrontPage" target="_blank">Wiki</a>
	</nav>
	<nav>
		<h6 class="footer-title">Documentation</h6>
		<a class="link link-hover" href="https://docs.freebsd.org/en/books/handbook/"
			>FreeBSD Handbook</a
		>
		<a class="link link-hover" href="https://man.freebsd.org/cgi/man.cgi">Manual Pages</a>
		<a class="link link-hover" href="https://docs.freebsd.org/en/books/handbook/jails/"
			>Jails and Containers</a
		>
		<a class="link link-hover" href="https://docs.freebsd.org/en/books/handbook/disks/">Storage</a>
		<a class="link link-hover" href="https://docs.freebsd.org/en/books/handbook/zfs/"
			>The Z File System (ZFS)</a
		>
	</nav>
</footer>
<footer class="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
	<aside class="grid-flow-col items-center space-x-2">
		<Fa icon={faFreebsd} size="2x" />
		<p>
			© 2025 The FreeBSD Project. All rights reserved
			<br />
			Made with ♥ by the FreeBSD Community
		</p>
	</aside>
	<nav class="md:place-self-center md:justify-self-end">
		<div class="grid grid-flow-col gap-4">
			<a href="https://github.com/freebsd/poudriere">
				<Fa icon={faGithub} size="1.7x" />
			</a>
		</div>
	</nav>
</footer>
