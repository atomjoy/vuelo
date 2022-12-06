<?php

namespace App\Models;

use Webi\Models\WebiUser;

class User extends WebiUser
{
	function __construct(array $attributes = [])
	{
		parent::__construct($attributes);

		$this->mergeFillable([
			// 'mobile', 'website'
		]);

		$this->mergeCasts([
			// 'status' => StatusEnum::class,
			// 'email_verified_at' => 'datetime:Y-m-d H:i:s',
		]);

		// $this->hidden[] = 'secret_hash';
	}

	protected $dispatchesEvents = [
		// 'saved' => UserSaved::class,
		// 'deleted' => UserDeleted::class,
	];
}
