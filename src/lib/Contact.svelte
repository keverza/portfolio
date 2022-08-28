<div
	class="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 "
>
	<div>
		<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:tracking-tight sm:text-4xl">
			Contact me
		</h2>
		<p class="mt-4 text-gray-500">
			You can contact me via <strong>ignas[at]mailbox.org</strong> or you can simply fill in this form.
		</p>
	</div>

	<div class="mt-5 md:mt-0 md:col-span-2">
		<form action="https://api.staticforms.xyz/submit" method="post">
			<div class=" sm:rounded-md sm:overflow-hidden">
				<div class="px-4 py-5 bg-white space-y-6 sm:p-6">
					<div class="grid grid-cols-3 gap-6">
						<input type="hidden" name="accessKey" value="f84da681-ab80-4951-bfc5-ea918d8eeafa" />
						<input type="text" name="honeypot" style="display: none;" />
						<input type="text" name="replyTo" style="display: none;" value="ignas@mailbox.org" />
						<!-- <input type="hidden" name="redirectTo" value="https://example.com/contact/success"> -->
						<div class="col-span-3 sm:col-span-2">
							<label for="email" class="block text-sm font-medium text-gray-700">
								Your email:
							</label>
							<div class="mt-1 flex rounded-md shadow-sm">
								<span
									class="inline-flex items-center px-3 rounded-l-md  bg-gray-50 text-gray-500 text-sm"
								>
									from:
								</span>
								<input
									type="text"
									name="email"
									id="email"
									class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
									placeholder="your@email.com"
								/>
							</div>
						</div>
					</div>

					<div>
						<label for="message" class="block text-sm font-medium text-gray-700"> Message: </label>
						<p class="mt-0 text-sm text-gray-400 italic">
							Please include brief description of project you would like to complete.
						</p>
						<div class="mt-1">
							<textarea
								id="message"
								name="message"
								rows="3"
								class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
								placeholder="I would like to build..."
							/>
						</div>
					</div>
				</div>
				<div class="px-4 py-3  text-right sm:px-6">
					<button
						type="submit"
						class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>Send</button
					>
				</div>
			</div>
		</form>
	</div>
</div>
